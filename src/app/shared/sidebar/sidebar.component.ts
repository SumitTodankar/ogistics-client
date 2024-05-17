import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input('showAside') showSidebar = false;
  @Output() emitSidebar = new EventEmitter<Boolean>();
  constructor(private router: Router) {}

  ngOnInit() {}

  listItems = [
    { id: 1, label: 'Home', linkTo: '/' },
    { id: 2, label: 'About', linkTo: '/about' },
    { id: 3, label: 'Services', linkTo: '/services' },
    { id: 4, label: 'Our Vehicles', linkTo: '/vehicles' },
    { id: 5, label: 'Testimonial', linkTo: '/testimonial' },
    { id: 6, label: 'Contact', linkTo: '/contact' },
  ];

  closeNav() {
    this.showSidebar = false;
    this.emitSidebar.emit(false);
  }

  navTo(itm: any) {
    this.router.navigate([itm.linkTo]);
    this.closeNav();
  }
}
