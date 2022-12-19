import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent {
  UserForm = new FormGroup({
    First_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Last_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    CheckBox: new FormControl('', [Validators.required]),
    CnfrmPassword: new FormControl('',[Validators.required])
  })

  Password1 = this.UserForm.value.Password
  password2 = this.UserForm.value.CnfrmPassword
  save() {
    console.warn(this.UserForm.value);
  }

  get isValidFname() {
    return this.UserForm.get('First_name')
  }
  get isValidLname() {
    return this.UserForm.get('Last_name')
  }
  get isValidEmail() {
    return this.UserForm.get('Email')
  }
  get invalidPassword() {
    return this.UserForm.get('Password')
  }

 isValidcnfrmPass() {
    if (this.Password1 == this.password2) {
      return true
    } else {
      return false
    }
  }
}



