import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=17be26625eacc8f82fc40b8cd21dc4a3`);
  }
  getTMovieDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=17be26625eacc8f82fc40b8cd21dc4a3`);
  }
   getTvDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=17be26625eacc8f82fc40b8cd21dc4a3`);
  }
  getMoviesByPagination(pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=17be26625eacc8f82fc40b8cd21dc4a3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }
  getTvByPagination(pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=17be26625eacc8f82fc40b8cd21dc4a3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }
}
