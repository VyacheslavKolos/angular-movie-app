import {Component} from '@angular/core';
import {IGenre} from "./interfaces/genre";
import {GenreService} from "./genre.service/genre.service";

/**
 * @title Basic menu
 */
@Component({
  selector: 'app-genres',
  templateUrl: 'genres.component.html',
})
export class GenresComponent {

  genres: IGenre[];

  constructor(private genreService:GenreService) {
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(({genres}) => this.genres= genres)
  }
}
