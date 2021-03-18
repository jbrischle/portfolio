import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {BackendService} from '../../backend.service';

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {
  data;
  securities;
  showChart = false;
  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';

  constructor(private readonly backend: BackendService) {
  }

  ngOnInit(): void {
    this.backend.getData().subscribe(value => {
      this.data = value;
      this.securities = value?.securities?.security;
    });
  }

  selectRow(event: any) {
    let lineChartData: ChartDataSets[] = [{
      data: [],
      label: event.name
    }]
    let lineChartLabels: Label[] = [];
    event?.prices?.price.forEach(value => {
      lineChartData[0].data.push(value['@_v'])
      lineChartLabels.push(value['@_t']);
    })
    this.lineChartData = lineChartData;
    this.lineChartLabels = lineChartLabels;
  }

}
