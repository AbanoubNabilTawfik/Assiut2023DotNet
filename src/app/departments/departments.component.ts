import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  selectedId:any;
  departments=[
    {"id":1 , "name":"Angular"},
    {"id":2 , "name":"JavaScript"},
    {"id":3 , "name":"ES6"},
    {"id":4 , "name":"HTML"},
    {"id":5 , "name":"CSS"}
  ]

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get("id");
    })
  }

  goToDepartmentDetails(dept:any)
  {
   //go to department details page and pass the id to it
   this.router.navigate(["/department",dept.id]);
  }

}
