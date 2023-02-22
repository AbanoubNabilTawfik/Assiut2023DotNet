import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employees:any=[];
  constructor(private employeeService:EmployeeService) { }
  errorMessage:any;
  ngOnInit(): void {
    //this.employees=this.employeeService.getEmployees()
    // this.employeeService.getEmployees().subscribe(
    //   employeeData=>{
    //     this.employees=employeeData;
    //   },
    //   error=>{
    //       this.errorMessage=error;
    //   }
    // )
    this.employeeService.getEmployees().subscribe({
      next:data=>this.employees=data,
      error:error=>this.errorMessage=error
    })
  }

  createPost()
  {
    this.employeeService.CreatePost().subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    })
  }

}
