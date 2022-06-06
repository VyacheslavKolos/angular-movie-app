import {Component, OnInit} from '@angular/core';

import {IMovie} from "../../interfaces";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {

  movies: IMovie[];

  constructor(private movieService: MovieService,) {
  }

  ngOnInit(): void {
    this.movieService.getAll().subscribe(({results}) => this.movies=results);
  }


}
