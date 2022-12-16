import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-dummy-form',
  templateUrl: './dummy-form.component.html',
  styleUrls: ['./dummy-form.component.css']
})
export class DummyFormComponent {
  UserForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb:FormBuilder){}

ngOnInit(){
this.UserForm=this.fb.group({
  First_name:['', Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]')],
  Last_name: ['', Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]')],
  Email: ['', Validators.required, Validators.email]

})
}

  
save() {
  this.submitted=true;
  if(this.UserForm.valid){
    console.log(this.UserForm.value);
  }
  if(this.UserForm.invalid){
    console.log("invalid form");
  }
}
get hello(){ return this.UserForm.controls; }


}
