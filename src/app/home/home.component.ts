import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }

  imagePrefix:string='https://image.tmdb.org/t/p/w500';
  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  trendingPerson:any[]=[]; 
  
  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe({
      next:(response)=> this.trendingMovies=response.results.slice(0,10)
    })
    this._MoviesService.getTrending('tv').subscribe({
      next:(response)=> this.trendingTv=response.results.slice(0,10)
    })
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
