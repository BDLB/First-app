import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageFrameComponent } from 'src/app/shared/components/page-frame/page-frame.component';
import { AngularFirestore    } from '@angular/fire/firestore';

@Component({
  selector: 'app-sidenav-drivers-regard',
  templateUrl: './sidenav-drivers-regard.component.html',
  styleUrls: ['./sidenav-drivers-regard.component.scss']
})
export class SidenavDriversRegardComponent implements OnInit, OnDestroy {

  constructor(
    public db: AngularFirestore,
    private _pageFrameComponent: PageFrameComponent
  ) { }

  dataSource = [
    {driver_code: 10025, secondDriverCode: 20025, thirdDriverCode: 30025},
    {driver_code: 10026, secondDriverCode: 20026, thirdDriverCode: 30025},
    {driver_code: 10027, secondDriverCode: 20027, thirdDriverCode: 30025},
    {driver_code: 10028, secondDriverCode: 20028, thirdDriverCode: 30025},
    {driver_code: 10029, secondDriverCode: 20029, thirdDriverCode: 30025},
  ];
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._pageFrameComponent.closeSidenavDrawer();
  }

}
