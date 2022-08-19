import { BehaviorSubject } from 'rxjs';
import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean=false;

  constructor(private _AuthServiceService:AuthServiceService) { }

   

  ngOnInit(): void {
    this._AuthServiceService.userData.subscribe({
      next:()=>{
        if(this._AuthServiceService.userData.getValue()!=null)
        {
          this.isLogin=true;
        }
        else 
        {
          this.isLogin=false;
        }
      }
    })
  }
  logOut()
  {
    this._AuthServiceService.signOut();
  }

}
