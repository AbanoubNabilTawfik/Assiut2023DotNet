import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(event:any)
  {
    console.log("Hello from typescript class")
    console.log(event)
  }

  displayValue(value:any)
  {
   console.log(value);
  }

}
