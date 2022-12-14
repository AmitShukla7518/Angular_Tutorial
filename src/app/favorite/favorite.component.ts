
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  Title = "Assignment 2 And 3"



  // ----2---
  isfavorite: boolean = false;
  onclick() {
    this.isfavorite = !this.isfavorite;
  }

  //---3----
  ShowData: any
  showDataFun(Data: any) {
    //return this.ShowData= Data.charAt(0).toUpperCase() + Data.substr(1).toLowerCase();
    Data = Data.toLowerCase().split(' ');
    for (var i = 0; i < Data.length; i++) {
      Data[i] = Data[i].charAt(0).toUpperCase() + Data[i].slice(1);
    }
    console.log(Data.join(' '));
    return this.ShowData = Data.join(' ')
  }









}
