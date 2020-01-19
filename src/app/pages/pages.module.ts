import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts/ng2-charts';

// Services
import { DatosService} from './../service/service.index';

// Rutas
import {  PAGES_ROUTING } from './pages.routes';


// Componentes
import { PagesComponent } from './pages.component';
import { GraficosComponent } from './index.paginas';
// import { MysqlComponent } from './mysql/mysql.component';

@NgModule({
declarations: [
  PagesComponent,
  GraficosComponent,
  // MysqlComponent
],
exports: [
  PagesComponent,
  GraficosComponent
],
imports: [
  CommonModule,
  PAGES_ROUTING,
  HttpClientModule,
  // BrowserModule,
  // HttpModule,,
  ChartsModule,

],


providers: [
  DatosService,
],
bootstrap: [
  // AppComponent
 ],

})

export class PagesModule { }
