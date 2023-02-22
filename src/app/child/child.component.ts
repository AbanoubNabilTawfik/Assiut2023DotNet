import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  //@Input() parentData:any;
  @Input('parentData') messageFromParent:any;
  @Input()cars:any;
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent()
  {
    this.childEvent.emit("Hello Parent From Child")
  }

  whoAmI()
  {
    console.log("Hello im child")
  }

}
