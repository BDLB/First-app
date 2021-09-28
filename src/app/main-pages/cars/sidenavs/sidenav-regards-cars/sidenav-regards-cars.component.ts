import { TitleCasePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RegardMainInfoService } from 'src/app/shared/services/.services';

import { PageFrameSidenavService } from 'src/app/shared/services/page-frame-sidenav.service';

@Component({
  selector: 'app-sidenav-regards-cars',
  templateUrl: './sidenav-regards-cars.component.html',
  styleUrls: ['./sidenav-regards-cars.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [TitleCasePipe]
})
export class SidenavRegardsCarsComponent implements OnInit {
  private _unsubscribeAll: Subject<any>

  // Setters for controls
  set carID(val) {
    this.sDrivers.get("id").setValue(val)
  }

  // Getters for controls
  get lastName() {
    return this.sDrivers.get("last_name").value;
  }

  get id() {
    return this.sDrivers.get("id").value;
  }

  constructor(
    private _pageFrameSidenavService: PageFrameSidenavService,
    private _regardMainInfoService: RegardMainInfoService,
    private _titlePipeCase: TitleCasePipe,
    private _formBuilder: FormBuilder,
  ) { 
    this._unsubscribeAll= new Subject();
  }

  sDrivers: FormGroup;

  ngOnInit(): void {
    this.sDrivers = this._formBuilder.group({
      toggle_buttons: [""],
      vehicle: [""],
      salutation: [""],
      first_name: [""],
      initial: [""],
      last_name: [""],
      id: [""],
      availability: [""],
      country: [""],
      city: [""],
      address: [""],
      birth_date: [""],
      first_citizenship: [""],
      second_citizenship: [""],
      email: [""],
      first_phone_number: [""],
      second_phone_number: [""],
      hire_date: [""],
      employer: [""],
      since_driving_experience: [""],
      for_driving_experience: [""]
    })

    this._regardMainInfoService.regardCarsInfo$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((carForm) => {
        if(carForm) {
          this.sDrivers.patchValue(carForm)
        }
      })

    this.sDrivers.controls["first_name"].valueChanges.subscribe(
      (firstName) => {
        if(firstName != this.sDrivers.value["first_name"]) {
          this.carID = this.generateNewCarID(firstName, this.lastName)
        }
      }
    )

    this.sidenavTitleConfig();

    this.sDrivers.controls["id"].valueChanges.subscribe(() => {
      this.sidenavTitleConfig();
    })


    this.loadTabs();
  }

  generateNewCarID(firstName: string, lastName: string) {
    if(firstName && lastName) {
      return (
        // titlePipeCase => makes the first letter High and 
        // the folowing letters Low.
        this._titlePipeCase.transform(firstName.slice(0, 1)) +
        // the slice extract the first letter.
        this._titlePipeCase.transform(lastName)
      )
    }
  }

  onSubmit() {
    console.table(this.sDrivers.value)
  }

  sidenavTitleConfig() {
    this._pageFrameSidenavService.notitySidenavTitle(this.id);
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
