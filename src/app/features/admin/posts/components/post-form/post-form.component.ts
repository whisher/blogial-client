import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { mimeTypeValidator } from '../../../../../shared/validators';
import { Post } from '../../models/post.model';

@Component({
  selector: 'admin-posts-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class AdminPostsPostFormComponent implements OnInit, OnDestroy {

  _pending: boolean;
  _isPristine = true;
  _hasSubmited = false;

  get pending(): boolean {
    return this._pending;
  }

  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.frm.disable();
    } else {
      this.frm.enable();
    }
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

  constructor(private fb: FormBuilder) {
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
        title : post.title,
        content: post.content,
        image: post.imagePath,
        isDraft: post.isDraft
      }
      this.frm.setValue(data);
      this.imagePreview = post.imagePath;
    }

  }

  createForm() {
    this.frm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      image:[null, [Validators.required], mimeTypeValidator],
      isDraft: [false]
    });
  }

  onSubmit() {
    if (this.frm.valid) {
      this._hasSubmited = true;
      this._isPristine = true;
      this.isPristine.emit(true);

      this.submitted.emit({
        _id: this.postId,
        ...this.frm.value
      });

    }
  }

  onImagePicker(event: Event){
    const file = (<HTMLInputElement>event.target).files[0];
    this.frm.patchValue({image: file})
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
