import { Component, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QueueSidenavDriversService } from 'src/app/shared/services/.services';
import { PageFrameSidenavService } from 'src/app/shared/services/page-frame-sidenav.service';

@Component({
  selector: 'app-sidenav-drivers-regard',
  templateUrl: './sidenav-drivers-regard.component.html',
  styleUrls: ['./sidenav-drivers-regard.component.scss']
})
export class SidenavDriversRegardComponent implements OnInit {
  dataSource = [];
  earnings = [];

  constructor(
    private _pageFrameSidenavService: PageFrameSidenavService,
    private _queueSidenavDriversService: QueueSidenavDriversService
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

    // Introducing the tabs dynamic.
    this.introducTabs();
  }

  introducTabs() {
    const tabs: any = [
      {
        path: "bookDriver",
        title: "BookletDriver"
      },
      {
        path: "bookRate",
        title: "BookletRate"
      }
    ]

    this._pageFrameSidenavService.updateSidenavCustomTabs(tabs);
  }
}
