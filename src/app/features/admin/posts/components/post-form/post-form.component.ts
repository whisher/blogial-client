import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from '../../models/post.model';

@Component({
  selector: 'admin-posts-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class AdminPostsPostFormComponent implements OnInit {
  _pending: boolean;
  _isPristine = true;
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

  @Input() data: Post;

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Post>();

  @Output() isPristine = new EventEmitter<boolean>();

  frm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {
    this.frm.valueChanges.subscribe(val => {
      if (this._isPristine) {
        this._isPristine = false;
        this.isPristine.emit(false);
      }
    });

    if (this.data) {
      //this.frm.setValue(this.data);
    }

  }

  createForm() {
    this.frm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.frm.valid) {
      this.frm.value.author = 'Yasin';
      this.frm.value.status = 'draft';
      this.submitted.emit(this.frm.value);
    }
  }
}
