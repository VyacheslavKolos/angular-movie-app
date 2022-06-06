import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovie} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private Http: HttpClient) {
  }

  getAll(): Observable<{ results:IMovie[] }> {
    return this.Http.get<{ results:IMovie[] }>(urls.getAllMovies);
  }

}
