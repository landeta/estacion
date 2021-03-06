import { Component, OnInit } from '@angular/core';
import { PagesComponent } from '../pages.component';
import { HttpClient } from '@angular/common/http';
import { DatosService } from '../../service/service.index';
import { Informaciones } from '../../models/informacion';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html'
})
export class GraficosComponent implements OnInit {
  public datos = null;
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Serie A'},

  ];
  public pagesComponent: PagesComponent;
  public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineFecha: Informaciones [];

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  constructor(
    public datosService: DatosService,
    private _http: HttpClient
  ) { }

  ngOnInit() {
      this.getCargo();
      this.getDatos();


  }

  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  public getCargo() {
      // console.log('veo que es', this.pagesComponent.totalRegistros );
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  getDatos() {
    return this.datos = this.datosService.getDatos().
     subscribe(datos =>  this.datos = datos);

   }

}
