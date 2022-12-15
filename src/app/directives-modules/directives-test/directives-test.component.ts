import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-test',
  templateUrl: './directives-test.component.html',
  styleUrls: ['./directives-test.component.css']
})
export class DirectivesTestComponent {

  title = "Directives"
  isDone = true;
  show = true
  Course = ["BCA", "B.tech", "BA"];
  color = "red"

  CourseDetils = [
    {
      Name: "BCA",
      fee: "1,40000",
      Duration: "3 Year"

    }, {
      Name: "B.Tech",
      fee: "1,50000",
      Duration: "4 Year"

    }, {
      Name: "BA",
      fee: "8000",
      Duration: "3 Year"

    }
  ]
lowercase: any;




}
