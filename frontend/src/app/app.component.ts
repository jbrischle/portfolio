import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('sideNav') sideNav;
  @ViewChild('menuButton', {read: ElementRef}) menuButton: ElementRef;
  @ViewChild('menuIcon', {read: ElementRef}) menuIcon: ElementRef;

  sideNavShow: boolean = false;
  title = 'portfolio';

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
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


}
