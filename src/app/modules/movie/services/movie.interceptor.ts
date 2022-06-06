import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {MovieService} from "./movie.service";

@Injectable()
export class MovieInterceptor implements HttpInterceptor {

  // token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjg4NmZlMjZhMmNkMzNkY2Y1NDQyODM5ZWM0YzhmYSIsInN1YiI6IjYyMDNhOGJmZWEzN2UwMDExOWEyZGVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IKVHqvmmM236kR_MpqoDHEbF3C-2U3MCL3WtbcljcEs';

  constructor(private movieService:MovieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addToken(request);
    return next.handle(request);
  }

  addToken(request:HttpRequest<any>):HttpRequest<any>{
    return request.clone({
       setHeaders: {Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjg4NmZlMjZhMmNkMzNkY2Y1NDQyODM5ZWM0YzhmYSIsInN1YiI6IjYyMDNhOGJmZWEzN2UwMDExOWEyZGVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IKVHqvmmM236kR_MpqoDHEbF3C-2U3MCL3WtbcljcEs`}
    })
  }
}
