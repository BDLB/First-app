import { Component, OnInit } from '@angular/core';
import { AllOrders } from 'src/app/shared/services/.services';
import { ICommands } from 'src/app/shared/interfaces/.interfaces';


@Component({
  selector: 'app-main-queue',
  templateUrl: './main-queue.component.html',
  styleUrls: ['./main-queue.component.scss']
})
export class MainQueueComponent {
  commands: boolean;
  openSidenav: boolean = false;
  orders: any;

  constructor(
    private AllOrders: AllOrders
  ) { }

  ngOnInit() {
    // this.orders= this.AllOrders.getAllOrders()
    this.orders = this.AllOrders.allOrders
  }

  NewOrder(order) {
    this.commands = true;
  }

  toggleSidenav() {
    this.openSidenav = !this.openSidenav;
  }
}
