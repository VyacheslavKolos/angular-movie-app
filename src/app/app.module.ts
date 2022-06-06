import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header/header.component';
import {LayoutComponent} from './components/layout/layout/layout.component';
import {MoviesModule} from "./modules/movie/movies.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MovieInterceptor} from "./modules/movie/services/movie.interceptor";
import {FormsModule} from "@angular/forms";
import { InputComponent } from './components/header/search/input/input.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {GenresComponent} from "./components/header/genres/genres.component";
import {MatMenuModule} from "@angular/material/menu";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    InputComponent,
    GenresComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MoviesModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MovieInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
