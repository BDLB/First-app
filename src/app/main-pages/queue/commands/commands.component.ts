import { Component, Input, OnInit } from '@angular/core';
import { CommandsService } from 'src/app/shared/services/queue-commands.service'
import { ICommands } from 'src/app/shared/interfaces/.interfaces';
import { AllOrders } from 'src/app/shared/services/.services';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  @Input()index: number;
  customer_name:string ='';
  starting_point:string ='';
  destination:string ='';
  amount_profit:number ;
  driver_name:string ='';

  constructor(
    private commandsService: CommandsService,
    private AllOrders: AllOrders
  ) { }

  // newCommand:ICommands = {
  //   customer_name : '',
  //   starting_point:'',
  //   destination:'',
  //   amount_profit: 0,
  //   driver_name: '',
  // }

  ngOnInit(): void {    

    this.customer_name = this.AllOrders.allOrders[this.index].customer_name;
    this.starting_point = this.AllOrders.allOrders[this.index].starting_point;
    this.destination = this.AllOrders.allOrders[this.index].destination;
    this.amount_profit = this.AllOrders.allOrders[this.index].amount_profit
    this.driver_name = this.AllOrders.allOrders[this.index].driver_name

    // console.log(this.starting_point)
    // this.newCommand.starting_point = this.commandsService.order.starting_point;
    // this.starting_point = this.newCommand.starting_point;

    // this.newCommand.destination = this.commandsService.order.destination;
    // this.destination = this.newCommand.destination;

    // this.newCommand.amount_profit = this.commandsService.order.amount_profit;
    // this.amount_profit = this.newCommand.amount_profit;

    // this.newCommand.driver_name = this.commandsService.order.driver_name;
    // this.driver_name = this.newCommand.driver_name;
  }

}
