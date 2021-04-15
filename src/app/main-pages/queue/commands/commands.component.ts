import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ICommands } from 'src/app/shared/interfaces/.interfaces';
import { AllOrders } from 'src/app/shared/services/.services';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CommandsComponent implements OnInit {

  @Input()index: number;
  customer_name:string ='';
  starting_point:string ='';
  destination:string ='';
  timepicker:string ='';
  amount_profit:number ;
  driver_name:string ='';
  notes: string ='';

  constructor(
    private AllOrders: AllOrders
  ) { }

  ngOnInit(): void {    

    this.customer_name = this.AllOrders.allOrders[this.index].customer_name;
    this.starting_point = this.AllOrders.allOrders[this.index].starting_point;
    this.destination = this.AllOrders.allOrders[this.index].destination;
    this.timepicker = this.AllOrders.allOrders[this.index].timepicker;
    this.amount_profit = this.AllOrders.allOrders[this.index].amount_profit
    this.driver_name = this.AllOrders.allOrders[this.index].driver_name
    this.notes = this.AllOrders.allOrders[this.index].notes
  }

  CommandDeleted(){
    this.AllOrders.allOrders.splice(this.index,1);
  }

}
