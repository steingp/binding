import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  myNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  OnIncrease() {
    this.myNumber += 1;
    console.log("myNumber: ", this.myNumber);
  }

  OnDecrease() {
    this.myNumber -= 1;
    console.log("myNumber: ", this.myNumber);
  }
}
