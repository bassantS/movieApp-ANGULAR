import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) { }
  movieId:string='';
  movieDetails:any;
  imagePrefix:string='https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this.movieId=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getTMovieDetails(this.movieId).subscribe({
      next:(response)=> this.movieDetails=response
    })
  }
}
