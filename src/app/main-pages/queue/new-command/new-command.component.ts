import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { ICommands } from 'src/app/shared/interfaces/.interfaces';
import { CommandsService } from 'src/app/shared/services/queue-commands.service';


@Component({
  selector: 'app-new-command',
  templateUrl: './new-command.component.html',
  styleUrls: ['./new-command.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NewCommandComponent {
  @Output() saveEmittor = new EventEmitter()
  saveCommand: boolean;
  
  customer_name:'';
  starting_point:'';
  destination:'';
  amount_profit: 0;
  driver_name: '';

  newCommand:ICommands = {
    customer_name : '',
    starting_point:'',
    destination:'',
    amount_profit: 0,
    driver_name: '',
  }

  constructor(private CommandsService: CommandsService){}

  CommandSaved(){
    this.newCommand.customer_name = this.customer_name;
    this.newCommand.starting_point = this.starting_point;
    this.newCommand.destination = this.destination;
    this.newCommand.amount_profit = this.amount_profit;
    this.newCommand.driver_name = this.driver_name;
    
    this.CommandsService.SaveNewCommand(this.newCommand)

    this.customer_name = "";
    this.starting_point = "";
    this.destination = "";
    this.amount_profit = null;
    this.driver_name = "";

    this.saveEmittor.emit(this.saveCommand=true)
  }
  
}
