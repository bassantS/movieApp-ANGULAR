import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  trendingPerson:any[]=[];
  imagePrefix:string='https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this._MoviesService.getTrending('person').subscribe({
      next:(response)=>{
      for (let i = 0; i < response.results.length; i++) 
      {
        if(response.results[i].profile_path==null)
        {
          response.results[i].profile_path='../../assets/dummy.jpg';
        }
        else
        {
          response.results[i].profile_path=this.imagePrefix+response.results[i].profile_path;
        }
        
      }
       this.trendingPerson=response.results.slice(0,10)
    }
    })
  }

}
