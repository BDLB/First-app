import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidenav-driver',
  templateUrl: './sidenav-driver.component.html',
  styleUrls: ['./sidenav-driver.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavDriverComponent implements OnInit {

  constructor() { }
  sDrivers: FormGroup;

  ngOnInit(): void {
    this.sDrivers = new FormGroup({
      'toggle_buttons': new FormControl(""),
      'vehicle': new FormControl(null, Validators.required),
      'salutation': new FormControl("", Validators.required),
      'driver-first_name': new FormControl(null),
      'driver-initial': new FormControl(null),
      'driver-last_name': new FormControl(null),
      'driver-id': new FormControl(null),
      'driver-availability': new FormControl(null),
      'address-country': new FormControl(null),
      'address-city': new FormControl(null),
      'address': new FormControl(null),
      'birth_date': new FormControl(null),
      'first_citizenship': new FormControl(null),
      'second_citizensip': new FormControl(null),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'first-phone_number': new FormControl(null),
      'second-phone_number': new FormControl(null),
      'hire-date': new FormControl(null),
      'employer': new FormControl(null),
      'since-driving_experience': new FormControl(null),
      'for-driving_experience': new FormControl(null),
      'week-pay_targets': new FormControl(null),
      'month-pay_targets': new FormControl(null),
      'payment-type': new FormControl(null),
    });
    console.log(this.sDrivers)
  }

  onSubmit() {
    console.table(this.sDrivers.value)
  }
}
