import {Component, OnInit} from '@angular/core';
import {BackendService} from './backend.service';
import {ChartDataSets, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  data;
  securities;
  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];

  constructor(readonly backend: BackendService) {
  }

  ngOnInit(): void {
    this.backend.getData().subscribe(value => {
      this.data = value;
      this.securities = value?.securities?.security;
    });
  }

  selectRow(event: any) {
    let lineChartData = {
      data: [],
      label: 'series a'
    }
    event?.prices?.price.forEach(value => {
      lineChartData.data.push(value['@_v'])
      this.lineChartLabels.push(value['@_t']);
    })
    this.lineChartData.push(lineChartData);
  }

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
}
