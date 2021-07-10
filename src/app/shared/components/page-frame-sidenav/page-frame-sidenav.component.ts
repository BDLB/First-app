import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PageFrameSidenavService } from '../../services/page-frame-sidenav.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-page-frame-sidenav',
  templateUrl: './page-frame-sidenav.component.html',
  styleUrls: ['./page-frame-sidenav.component.scss']
})
export class PageFrameSidenavComponent implements OnInit {

  constructor(
    private _location: Location,
    private _pageFrameSidenav: PageFrameSidenavService
  ) { }
  openSidenav: boolean;
  @Input() tabs: string[];
  currentTab: string;

  ngOnInit(): void {
    this._pageFrameSidenav.sidenavSwitch.subscribe(
      (open) => {
        this.openSidenav = open;
      })
  }

  onSidenavClosed() {
    this._location.back()
  }

  changeSidenavPage(tabPressed) {
    this.currentTab = tabPressed
    if (this.currentTab = "Drivers") {
      
    }
  }
}
