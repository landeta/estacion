import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosService } from '../service/service.index';
import { Informaciones } from '../models/informacion';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {
  public informaciones:  Array<Informaciones>;
  public datos = null;
  public info: Informaciones;
  dat: any[];
  totalRegistros: number;
  public nombre = 'veo si entra en pages.component.ts';
constructor(
    public datosService: DatosService,
    private _http: HttpClient
  ) {

  }

  ngOnInit() {
        this.getDatos();

  }

  getDatos() {

        console.log('segundo ', this.datosService.getDatos()
       .subscribe(datos =>  this.datos = datos));
       return this.datos = this.datosService.getDatos().
        subscribe(datos =>  this.datos = datos);

      }


}


