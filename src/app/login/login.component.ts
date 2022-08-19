import { Router } from '@angular/router';
import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage:string='';
  isLoading:boolean=false;
  constructor(private _AuthServiceService:AuthServiceService ,private _Router:Router) { }

  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.pattern('^[A-Z][a-z]{3,8}'),Validators.required]),
  })

  submit(loginForm:FormGroup){
    if(loginForm.valid)
    {
      this.isLoading= true;
      this._AuthServiceService.signIn(loginForm.value).subscribe({
        next:(response)=> {
          if(response.message==='success'){
            this.isLoading= false;
            localStorage.setItem('userToken',response.token); 
            this._AuthServiceService.saveUserData();
            //navigate to login
            this._Router.navigate(['/home']);
            }
          else{
            this.errorMessage=response.message;
            this.isLoading= false;
          }
        },
    })
    }
  }

  ngOnInit(): void {
  }

}
