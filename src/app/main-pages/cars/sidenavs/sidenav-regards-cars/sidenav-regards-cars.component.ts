import { Component, OnInit } from '@angular/core';

import { PageFrameSidenavService } from 'src/app/shared/services/page-frame-sidenav.service';

@Component({
  selector: 'app-sidenav-regards-cars',
  templateUrl: './sidenav-regards-cars.component.html',
  styleUrls: ['./sidenav-regards-cars.component.scss']
})
export class SidenavRegardsCarsComponent implements OnInit {

  constructor(
    private _pageFrameSidenavService: PageFrameSidenavService,
  ) { }

  ngOnInit(): void {
    this.loadTabs();
  }

  loadTabs() {
    let tabs: any = [
      {
        path: "info",
        title: "General"
      },
      {
        path: "docs",
        title: "Docs"
      },
      {
        path: "notes",
        title: "Notes"
      }
    ]
    
    this._pageFrameSidenavService.updateSidenavCustomTabs(tabs)
  }
}
