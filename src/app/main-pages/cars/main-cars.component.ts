import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-cars',
  templateUrl: './main-cars.component.html',
  styleUrls: ['./main-cars.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainCarsComponent implements OnInit {
  private _unsubscribeAll: Subject<any>;
  dataSource: BehaviorSubject<any>;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._unsubscribeAll = new Subject();
    this.dataSource = new BehaviorSubject([
      {
        driver_id: '12354',
        driver_name: 'Sawer',
        vehicle_id: '45987',
        phonePrimary: '0775525516',
        last_note: 'This is a simple text',
      },
    ]);
  }

  ngOnInit(): void {
    // Iterate the source and make that every object 
    // to have different appearance !!
    this.dataSource
      .pipe(
        takeUntil(this._unsubscribeAll)
        // TODO: You can order the dataSource
      )
      .subscribe((drivers) => {
        this.dataSource = drivers.map((driver) => {
          return {
            model: driver,
            actions: this.configureActions(driver),
          };
        });
      });
  }

  configureActions(driver) {
    return {
      edit: [
        {
          label: '',
          svgIcon: 'fas fa-edit',
          iconClass: 'cursor-pointer bg-color-white',
          action: () => {
            this.editDriverPage();
          },
        },
      ],
    };
  }

  editDriverPage() {
    this._router.navigate(
      [{ outlets: { sidenav: [ 'cars', 'info' ] }}],
      { relativeTo: this._activateRoute.parent }
    )
  }
}
