import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovie} from "../../../../modules/movie/interfaces";
import {urls} from "../../../../constants";
import {IGenre} from "../interfaces/genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private Http: HttpClient) {

  }

  getAll(): Observable<{ genres: IGenre[] }> {
    return this.Http.get<{ genres: IGenre[] }>(urls.getAllGenres);
  }
}
