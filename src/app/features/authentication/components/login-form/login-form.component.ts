import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Authenticate } from '../../models/authentication';

@Component({
  selector: 'iwdf-authentication-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class AuthenticationLoginFormComponent {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.frm.disable();
    } else {
      this.frm.enable();
    }
  }

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Authenticate>();

  frm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.frm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.frm.valid) {
      this.submitted.emit(this.frm.value);
    }
  }
}
