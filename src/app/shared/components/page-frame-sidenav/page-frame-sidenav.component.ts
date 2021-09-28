import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PageFrameSidenavService } from '../../services/page-frame-sidenav.service';
import { PageFrameComponent } from '../page-frame/page-frame.component';

@Component({
  selector: 'app-page-frame-sidenav',
  templateUrl: './page-frame-sidenav.component.html',
  styleUrls: ['./page-frame-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageFrameSidenavComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any>;
  sidenavCustomTitle: string;
  tabs:any;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _pageFrameSidenavService: PageFrameSidenavService,
    private _pageFrameComponent: PageFrameComponent
  ) { 
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._pageFrameComponent.openSidenavDrawer();

    this._pageFrameSidenavService.sidenavCustomTabs$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((tabs) =>{
      if(tabs) {
        this.tabs = tabs;
        this._changeDetectorRef.detectChanges();
      }
    })

    this._pageFrameSidenavService.sidenavCustomTitle$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((sidenavTitle) => {
      this.sidenavCustomTitle = sidenavTitle;
    })
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
