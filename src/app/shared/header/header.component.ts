import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input('showAside') showSidebar: any;
  @Output() emitSidebar = new EventEmitter<Boolean>();

  constructor() {}

  openSidebar() {
    this.emitSidebar.emit(!this.showSidebar);
  }
}
