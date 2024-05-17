import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ogistics';
  showAside: boolean = false;
  enableBg: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  toggleSidebar(evt: any) {
    this.showAside = evt;
  }
}
