import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Post, Thumb } from '../../../../../core/posts/models';
import { atLeastOne, mimeTypeValidator } from '../../../../../shared/validators';
import { AdminPostsPostGalleryComponent } from '../../modals';

@Component({
  selector: 'admin-posts-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class AdminPostsPostFormComponent implements OnInit, OnDestroy {

  _pending: boolean;
  _isPristine = true;
  _hasSubmited = false;
  chips: Array<string> = [];

  get pending(): boolean {
    return this._pending;
  }

  @Input()
  set pending(isPending: boolean) {
    this._pending = isPending;
  }

  @Input() selectedPost: Post | null;

  @Input() error: boolean;

  @Output() submitted = new EventEmitter<Post>();

  @Output() isPristine = new EventEmitter<boolean>();

  frm: FormGroup;

  subscription: Subscription;

  postId = null;

  isDraft = false;

  imagePreview: string;

  // Gallery
  files: any = [];

  get places() {
    return this.frm.get('places') as FormArray;
  }
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.subscription = this.frm.valueChanges.subscribe(val => {
      if (this._isPristine) {
        if(!this._hasSubmited){
          this._isPristine = false;
          this.isPristine.emit(false);
        }
      }
    });

    if (this.selectedPost) {
      const post = {...this.selectedPost};
      this.postId = post._id;
      const data = {
        title: post.title,
        content: post.content,
        image: post.imagePath,
        isDraft: post.isDraft,
        places: JSON.parse(post.places),
        tags: null
      }
      this.frm.setValue(data);
      this.imagePreview = post.imagePath;
      this.files = JSON.parse(post.files);
      this.chips = JSON.parse(post.tags);
      console.log('this.chips',this.chips);
    }

  }

  createForm() {
    this.frm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      image:[null, [Validators.required], mimeTypeValidator],
      isDraft: [false],
      tags: [null],
      places:this.fb.array([this.createPlace()])
    });
  }

  createPlace(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  onAddPlace(): void {
    this.places.push(this.createPlace());
  }

  onRemovePlace({ group, index }: { group: FormGroup, index: number }){
    const control = this.places;
    control.removeAt(index);
  }

  onSubmit() {
    if (this.frm.valid) {
      this._hasSubmited = true;
      this._isPristine = true;
      this.isPristine.emit(true);
      this.submitted.emit({
        _id: this.postId,
        files: this.files,
        ...this.frm.value
      });
    }
  }

  onImagePicker(event: Event){
    const file = (<HTMLInputElement>event.target).files[0];
    this.frm.patchValue({image: file})
    //this.frm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  openGallery() {
    const modalRef = this.modalService.open(AdminPostsPostGalleryComponent, {
      backdropClass: 'backdrop-primary',
      ariaLabelledBy: 'modal-post-gallery',
      windowClass: 'modal-container',
      size: 'lg',
      centered: true
    })
    modalRef.componentInstance.files = this.files;
    modalRef.result.then((result) => {
      if(result) {
        this.files = [...result];
      }
    }, (reason) => {});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
