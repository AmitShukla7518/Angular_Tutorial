import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrayFormComponent } from './array-form/array-form.component';


@NgModule({
  declarations: [
    ReactiveFormComponent,
    ArrayFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
 exports:[
  ReactiveFormComponent
 ]
})
export class ReactiveFormModule { }
