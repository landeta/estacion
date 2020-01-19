import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';


import { Informaciones } from '../../models/informacion';


const endpoint = 'http://localhost:3000/api/v1/';
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DatosService {
  info: Informaciones [];
  private informacionUrl = 'http://localhost/meteo/datos_meteo.php/';  // URL to web api
  constructor(private _http: HttpClient) {
  }

  getDatos() {
    return  this._http.get<Informaciones>(this.informacionUrl)
    .pipe(
      map( x => x));

  }
}
