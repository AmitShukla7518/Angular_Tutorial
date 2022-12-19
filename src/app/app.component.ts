import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  
  // @ViewChild('ids', {static: true}) : ElementRef
 
 //14 Des 2022
 
  Userdata:any ={}

GetData(Data:any){
    console.log(Data);
    this.Userdata = Data
    
  }
 
  // ---------Referance Type Variable-------------

GetReferance(getData :any){
  console.warn(getData);
}

check(demo:HTMLInputElement){
console.warn(demo.value);

}




//Assignment 4 For Send Data in Parants to Child Component
tweet ={
  body:'..',
  CountLike:10,
  isActive:false
}

}
