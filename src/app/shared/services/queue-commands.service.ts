import { EventEmitter, Injectable } from '@angular/core';
import { ICommands } from 'src/app/shared/interfaces/.interfaces';

@Injectable({
    providedIn: 'root'
})

export class CommandsService {
    order = {
        customer_name : '',
        starting_point:'',
        destination:'',
        amount_profit: 0,
        driver_name: '',
    }
   
    SaveNewCommand(command: ICommands){
        this.order.customer_name = command.customer_name
        this.order.starting_point = command.starting_point
        this.order.destination = command.destination
        this.order.amount_profit = command.amount_profit
        this.order.driver_name = command.driver_name
    }
}