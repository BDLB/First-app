import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PageFrameComponent } from 'src/app/shared/components/page-frame/page-frame.component';
import { QueueSidenavDriversService } from 'src/app/shared/services/.services';

@Component({
  selector: 'app-sidenav-drivers-regard',
  templateUrl: './sidenav-drivers-regard.component.html',
  styleUrls: ['./sidenav-drivers-regard.component.scss']
})
export class SidenavDriversRegardComponent implements OnInit, OnDestroy {
  dataSource = [];
  earnings = [];

  constructor(
    private _queueSidenavDriversService: QueueSidenavDriversService,
    private _pageFrameComponent: PageFrameComponent
  ) {
    // use this subject to avoid memory leaks. 
    // All obs. are done after the component was destroyed.
    this._unsubscribeAll = new Subject();
  }

  private _unsubscribeAll: Subject<any>;

  ngOnInit(): void {
    combineLatest([
      this._queueSidenavDriversService.queueSidenavDrivers$,
      this._queueSidenavDriversService.queueAdditionalSidenavDrivers$
    ])
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((data) =>{
      // I made that just to learn forkJoin and combineLatest
      data[0].map((e) =>{
        this.dataSource.push({...e})
      })
      data[1].map((addelm) =>{
        this.earnings.push(addelm)
      })
      this.dataSource.forEach((item, index) =>{
        let a = this.earnings[index]
        this.dataSource[index] = {...item, ...a}
      })
    })
  }

  ngOnDestroy(): void {
    this._pageFrameComponent.closeSidenavDrawer();
  }
}
