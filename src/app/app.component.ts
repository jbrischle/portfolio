import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {BackendService} from './backend.service';
import {ChartDataSets, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';

  @ViewChild('sideNav') sideNav;
  @ViewChild('menuButton', {read: ElementRef}) menuButton: ElementRef;
  @ViewChild('menuIcon', {read: ElementRef}) menuIcon: ElementRef;
  data;
  securities;
  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  showChart = false;
  sideNavShow: boolean = false;

  constructor(private renderer: Renderer2, private readonly backend: BackendService) {
  }

  ngOnInit(): void {
    this.backend.getData().subscribe(value => {
      this.data = value;
      this.securities = value?.securities?.security;
    });
  }

  ngAfterViewInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.sideNav && e.target !== this.sideNav.nativeElement) {
        console.log(this.sideNav.nativeElement)
        this.sideNavShow = false;
      }
      let menuButtonOrMenuIcon = e.target === this.menuButton.nativeElement || e.target === this.menuIcon.nativeElement;
      if (menuButtonOrMenuIcon && !this.sideNav) {
        this.sideNavShow = true;
      }
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

  public lineChartLegend = true;

  public lineChartType: ChartType = 'line';
}
