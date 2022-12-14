import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-tut',
  templateUrl: './pipes-tut.component.html',
  styleUrls: ['./pipes-tut.component.css']
})
export class PipesTutComponent {
Title= "Intro Of Pipes"
Today  = Date();
Object={
  "Name":"Amit Shukla",
  "Class":"BCA",
  "Add":"Gorakhpur"
}
}
