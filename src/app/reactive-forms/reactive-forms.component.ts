import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../custom-validation/confirmPassword.validator';
import { ForbiddenNameValidator } from '../custom-validation/userName.validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // registerationForm=new FormGroup({
  //   userName:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     street:new FormControl(''),
  //     city:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // });

  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator]],
    password:[''],
    confirmPassword:[''],
    email:[''],
    aletrnativeEmails:this.fb.array([]),
    subscribe:[false],
    address:this.fb.group({
      street:[''],
      city:[''],
      postalCode:['']
    })
  },{validator:[ConfirmPasswordValidator]});

  get userName()
  {
    return this.registerationForm.get('userName')
  }

  get email()
  {
    return this.registerationForm.get('email')
  }

  get aletrnativeEmails()
  {
    return this.registerationForm.get("aletrnativeEmails") as FormArray;
  }

  addAlternativeEmail()
  {
    this.aletrnativeEmails.push(this.fb.control(''))
  }
  removeEmail(index:any)
  {
   this.aletrnativeEmails.removeAt(index);
  }
  setEmailValidation()
  {
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        this.email?.setValidators(Validators.required);
      }
      else
      {
        this.email?.clearValidators();
      }
      this.email?.updateValueAndValidity();
    })
  }



  ngOnInit(): void {
  }

  loadData()
  {
    // this.registerationForm.setValue({
    //   userName:'ITI',
    //   password:'123',
    //   confirmPassword:'123',
    //   address:{
    //     street:'Gomhorya',
    //     city:'Assiut',
    //     postalCode:'71111'
    //   }
    // })

    this.registerationForm.patchValue({
      userName:'ITI',
      address:{
        street:'Gomhorya',
        city:'Assiut',
        postalCode:'71111'
      }
    })
  }

}
