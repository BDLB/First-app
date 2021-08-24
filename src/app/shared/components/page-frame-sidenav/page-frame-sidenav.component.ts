import { Component, OnInit } from '@angular/core';
import { PageFrameComponent } from '../page-frame/page-frame.component';

@Component({
  selector: 'app-page-frame-sidenav',
  templateUrl: './page-frame-sidenav.component.html',
  styleUrls: ['./page-frame-sidenav.component.scss']
})
export class PageFrameSidenavComponent implements OnInit {

  constructor(
    private _pageFrameComponent: PageFrameComponent
  ) { }

  ngOnInit(): void {
    this._pageFrameComponent.openSidenavDrawer();
  }

}
