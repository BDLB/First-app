import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageFrameComponent }           from '../../../../shared/components/page-frame/page-frame.component';

@Component({
  selector: 'app-sidenav-rates-regard',
  templateUrl: './sidenav-rates-regard.component.html',
  styleUrls: ['./sidenav-rates-regard.component.scss']
})
export class SidenavRatesRegardComponent implements OnInit, OnDestroy {

  constructor(
    private _pageFrameComponent: PageFrameComponent
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._pageFrameComponent.closeSidenavDrawer();
  }

}
