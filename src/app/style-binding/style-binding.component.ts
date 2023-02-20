import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {
  textColor:string="green";
  hasError:boolean=false;
  
  messagesStyles={
    color:'gray',
    fontStyle:'italic'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
