import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() inNumber: number;
  @Output() Increase: EventEmitter<any> = new EventEmitter();
  @Output() Decrease: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  nesteVerdi() {
    console.log("inrease er klikket")
    this.Increase.emit();
  }

  forrigeVerdi() {
    console.log("decrease er klikket")
    this.Decrease.emit();
  }
}
