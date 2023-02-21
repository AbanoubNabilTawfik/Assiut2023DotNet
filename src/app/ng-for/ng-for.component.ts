import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  constructor() { }
  cars=["Tipo","KIA","BMW","LOGAN","Optera"]
  persons=[
    {"id":0,"name":"Ahmed Mohamed","age":30},
    {"id":1,"name":"Eslam Taha","age":35},
    {"id":2,"name":"Abanoub Nabil","age":31},
    {"id":3,"name":"Sara Mostafa","age":40},
    {"id":4,"name":"Merna Rateb","age":27},
  ]

  ngOnInit(): void {
  }

}
