import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies-components/movies/movies.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieComponent } from './movies-components/movie/movie.component';
import { PaginationComponent } from './movies-components/movies/pagination/pagination.component';
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
    declarations: [
        MoviesComponent,
        MovieComponent,
        PaginationComponent
    ],
    exports: [
        MoviesComponent
    ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    MatPaginatorModule
  ]
})
export class MoviesModule { }
