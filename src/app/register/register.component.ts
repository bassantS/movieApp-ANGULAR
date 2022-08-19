import { Router } from '@angular/router';
import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage:string='';
  isLoading:boolean=false;
  constructor(private _AuthServiceService:AuthServiceService ,private _Router:Router) { }

  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    last_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    age:new FormControl(null,[Validators.min(16),Validators.max(80),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.pattern('^[A-Z][a-z]{3,8}'),Validators.required]),

  })
  submit(registerForm:FormGroup){
    if(registerForm.valid)
    {
      this.isLoading= true;
      this._AuthServiceService.signUp(registerForm.value).subscribe({
        next:(response)=> {
          if(response.message==='success'){
            this.isLoading= false;
            //navigate to login
            this._Router.navigate(['/login']);
            }
          else{
            this.isLoading= false;
            this.errorMessage=response.message;
          }
        },
    })
    }
  }

  ngOnInit(): void {
  }

}
