import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { User } from '../../../../../core/users/models';

import { mimeTypeValidator } from '../../../../../shared/validators';


@Component({
  selector: 'admin-users-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class AdminUsersUserFormComponent implements OnInit, OnDestroy {

  _pending: boolean;
  _isPristine = true;
  _hasSubmited = false;
  roles = ['writer', 'admin'];

  get pending(): boolean {
    return this._pending;
  }

  @Input()
  set pending(isPending: boolean) {
    this._pending = isPending;
  }

  @Input() selectedUser: User | null;

  @Input() error: boolean;

  @Output() submitted = new EventEmitter<User>();

  @Output() isPristine = new EventEmitter<boolean>();

  frm: FormGroup;

  subscription: Subscription;

  userId = null;

  imagePreview: string;

  constructor(
    private fb: FormBuilder
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

    if (this.selectedUser) {
      const user = {...this.selectedUser};
      this.userId = user._id;
      const data = {
        firstname: user.firstname,
        lastname: user.lastname,
        display_name: user.display_name,
        email: user.email,
        password: 'xxxxx',
        role: user.role,
        avatar: user.avatar,
      }
      this.frm.setValue(data);
      this.imagePreview = user.avatar;
    }

  }

  createForm() {
    this.frm = this.fb.group({
      avatar:[null, [Validators.required], mimeTypeValidator],
      display_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }



  onSubmit() {
    if (this.frm.valid) {
      this._hasSubmited = true;
      this._isPristine = true;
      this.isPristine.emit(true);

      this.submitted.emit({
        _id: this.userId,
        ...this.frm.value
      });

    }
  }

  onImagePicker(event: Event){
    const file = (<HTMLInputElement>event.target).files[0];
    this.frm.patchValue({avatar: file})
    this.frm.get('avatar').updateValueAndValidity();
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
