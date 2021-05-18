import { Component, Input, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICommands } from 'src/app/shared/interfaces/.interfaces';
import { AllOrders } from 'src/app/shared/services/.services';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommandsComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();

  @Input() index: number;
  customer_name: string = '';
  starting_point: string = '';
  destination: string = '';
  timepicker: string = '';
  amount_profit: number;
  driver_name: string = '';
  notes: string = '';

  constructor(
    private _AllOrders: AllOrders,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.customer_name = this._AllOrders.allOrders[this.index].customer_name;
    this.starting_point = this._AllOrders.allOrders[this.index].starting_point;
    this.destination = this._AllOrders.allOrders[this.index].destination;
    this.timepicker = this._AllOrders.allOrders[this.index].timepicker;
    this.amount_profit = this._AllOrders.allOrders[this.index].amount_profit
    this.driver_name = this._AllOrders.allOrders[this.index].driver_name
    this.notes = this._AllOrders.allOrders[this.index].notes
  }

  CommandDeleted() {
    this._AllOrders.allOrders.splice(this.index, 1);
  }

  onDriverSidenav() {
    //   let driver: string =this._route.snapshot.params['driver'];

    this._router.navigate(['queue/sidenav/driver/' + this.driver_name]);

    this.toggleSidenav.emit(null)
  }
}
