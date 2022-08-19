import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userData:any=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router)
   { 
    if(localStorage.getItem('userToken'))
    {
      this.saveUserData();
    }
  }

  saveUserData()
  {
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any=jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    console.log(this.userData);
  }
  signUp(formData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  } 
  signIn(formData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formData)
  }
  signOut()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
