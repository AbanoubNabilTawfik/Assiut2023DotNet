import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  constructor() { }
  displayName:boolean=false;
  totalCount:number=20;
  ngOnInit(): void {
  }

}
