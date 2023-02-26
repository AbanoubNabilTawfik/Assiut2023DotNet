import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  topics=["Angular","JavaScript","HTML","CSS"];
  userModel:User= new User('','',"","",false);
  toipicHasError:boolean=true;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  ValidateTopic(topicvalue:any)
  {
   if(topicvalue==="default")
   {
    this.toipicHasError=true;
   }
   else
   {
    this.toipicHasError=false
   }
  }

  submitData()
  {
    //call the service
    this.userService.postUserToBackend(this.userModel);
  }

}
