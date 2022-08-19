import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) { }
  tvId:string='';
  tvDetails:any;
  imagePrefix:string='https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this.tvId=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getTvDetails(this.tvId).subscribe({
      next:(response)=> this.tvDetails=response
    })
  }

}
