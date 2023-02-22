import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 @ViewChild(ChildComponent) child?:ChildComponent;
  constructor() { }
  message:string="Hello child from parent";
  cars=["KIA","VOLVO","LOGAN","TIPO"]
  messageFromChild:string="";

  ngOnInit(): void {
    console.log("on init")
    //this.child?.whoAmI();
  }
  ngAfterViewInit()
  {
   this.child?.whoAmI();
  }

}
