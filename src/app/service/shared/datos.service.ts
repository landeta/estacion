import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';


import { Informaciones } from '../../models/informacion';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DatosService {
  info: Informaciones [];
  private informacionUrl = 'http://localhost/meteo/datos_meteo.php/';  // URL to web api
  constructor(private _http: HttpClient) {

   }
  id = 1;;
  getDatos() {
    return this._http.get<Informaciones>(this.informacionUrl);
//    .pipe(map(res =>  res.id));
  }

getDatos7() {
  return this._http.post<Informaciones>(this.informacionUrl, { 'id': this.id })
  .pipe(map(res =>  res));
}

getSidebarEntradas(): Observable<Informaciones>  {
  return this._http.get<Informaciones>(this.informacionUrl);
}

  // getData() {
    getDatos2(): Observable<any> {
    let es: any;
    es = this._http.post<any>(this.informacionUrl, {'id': 1});
    console.log(' Antes?? ', es);
    console.log(' Primera?? ', es.subscribe(of(es).pipe(map(res => es = res ))));
    console.log(' Segunda?? ', es);
    // return this._http.get(this.informacionUrl).pipe(
    //   map(this.extractData));
    return   this._http.get(this.informacionUrl)
        .pipe(map( res => res));


  }


   getDatos3(): Observable<Informaciones> {
      console.log('primer verificacion ', this._http.post<any>(this.informacionUrl, {'id': 1})
      .pipe(map(resul => resul)));
      return this._http.get<Informaciones>(this.informacionUrl)
      .pipe(map(resul => resul));
    }
  }
