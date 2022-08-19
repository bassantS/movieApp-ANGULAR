import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  trendingTv:any[]=[];
  imagePrefix:string='https://image.tmdb.org/t/p/w500';

  pages:number[]= [];
  term:string='';
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.pages=new Array(10).fill('').map((x,i)=>i+1);
    this._MoviesService.getTvByPagination(1).subscribe({
      next:(response)=>this.trendingTv= response.results
    })
  }
  tvPagination(pageNumber:number)
  {
    this._MoviesService.getTvByPagination(pageNumber).subscribe({
      next:(response)=>this.trendingTv= response.results
    })
  }

}