import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PageFrameSidenavService } from '../../services/page-frame-sidenav.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-frame-tab',
  templateUrl: './page-frame-tab.component.html',
  styleUrls: ['./page-frame-tab.component.scss']
})
export class PageFrameTabComponent implements OnInit {

  constructor(
    private _location: Location,
    private _router: Router,
    private route: ActivatedRoute,
    private _pageFrameSidenav: PageFrameSidenavService
  ) { }
  openSidenav: boolean;
  @Input() tabs: string[];
  currentTab: string;
  URL: any;
  private sub: any;

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
    this.URL = window.location.pathname
    tabPressed = tabPressed.toLowerCase();
    if (!this.URL.includes(tabPressed)){
      var url = this.URL.split("/")
      this._router.navigate([`./../../sidenav/${tabPressed}/${url[4]}`])
    }
  }
}
