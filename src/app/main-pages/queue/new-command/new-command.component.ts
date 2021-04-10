import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ICommands } from 'src/app/shared/interfaces/.interfaces';
import { AllOrders } from 'src/app/shared/services/.services';


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

  @ViewChild('orderNotes') orderNotes: ElementRef;

  newCommand:ICommands = {
    customer_name : '',
    starting_point:'',
    destination:'',
    amount_profit: 0,
    driver_name: '',
    notes: ''
  }

  constructor(private CommandsService: AllOrders){}

  CommandSaved(){
    if(this.customer_name !== undefined)
    {
      this.newCommand.customer_name = this.customer_name;
      this.newCommand.starting_point = this.starting_point;
      this.newCommand.destination = this.destination;
      this.newCommand.amount_profit = this.amount_profit;
      this.newCommand.driver_name = this.driver_name;
      this.newCommand.notes = this.orderNotes.nativeElement.value;
      
      this.CommandsService.allOrders.unshift(this.newCommand);

      this.saveEmittor.emit(this.saveCommand=true);

      this.customer_name = undefined;
      this.starting_point ='';
      this.destination ='';
      this.amount_profit = null;
      this.driver_name ='';
      this.orderNotes.nativeElement.value = '';
    }
  }
}
