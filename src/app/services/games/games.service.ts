import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Games } from '../../models/games.models';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class GameService {
  // tslint:disable-next-line:no-inferrable-types
  totalAgencias: number = 0;

  constructor(
    public http: HttpClient
  ) { }

  cargarGames(): Observable<any> {

    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + 'games';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(url, {headers})
    .pipe(
    map( (resp: any) => {
    return resp.data;
    }));
  }

}
