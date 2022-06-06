import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie:IMovie;

  image=urls.image;

  constructor() { }

  ngOnInit(): void {

  }

}
