import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { pageFrameConfig } from './page-frame.config';
import { MatDrawer } from "@angular/material/sidenav";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-frame',
  templateUrl: './page-frame.component.html',
  styleUrls: ['./page-frame.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageFrameComponent implements OnInit {
  // How to target the mat drawer ?! static ?!
  @ViewChild("matDrawer", { static: true })
  private matDrawer: MatDrawer;
  pageConfiguration: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.pageConfiguration = pageFrameConfig.queue.mainpage;
  }

  openSidenavDrawer(): void {
    this.matDrawer.open();
  }

  onBackdropClicked(): void {
    this.closeSidenavDrawer();
  }

  // This fct must containt the scenario when you close 
  // the sidenav and the URL must go back to Tab URL.
  closeSidenavDrawer(): void {
    let mainPage;
    // Learn about route.snapshot ?!
    const children = this._activatedRoute.snapshot.children;
    // For-of iterates throught an array
    for (const child of children) {
      if (child.outlet === "tab") {
        mainPage = child.routeConfig.path
      }
      // Create the URL for mainPage
      const mainURL = this._router.url.split("(")[0];
      this._router.navigateByUrl(`${mainURL}(tab:${mainPage})`)

      this.matDrawer.close();
    }
  }
}
