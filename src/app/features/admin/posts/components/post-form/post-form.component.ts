import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from '../../models/post.model';

@Component({
  selector: 'admin-posts-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class AdminPostsPostFormComponent {
  _pending: boolean;

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

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Post>();

  frm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.frm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.frm.valid) {
      this.submitted.emit(this.frm.value);
    }
  }
}
