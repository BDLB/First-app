import { Injectable } from '@angular/core';
import { ICommands } from 'src/app/shared/interfaces/.interfaces'

@Injectable({
    providedIn: 'root'
})

export class AllOrders{
    allOrders: ICommands[] = [
        {customer_name: 'Bogdan' , starting_point: 'Arad', destination: 'Timisoara', timepicker:'15:35', amount_profit: 200, driver_name: 'Bogdan', notes: 'A lot of luggage'},
        {customer_name: 'David' , starting_point: 'Bucuresti', destination: 'Deva', timepicker:'06:35', amount_profit: 850, driver_name: 'Lucian', notes: 'She has a pet'},
        {customer_name: 'Raul' , starting_point: 'Hateg', destination: 'Vaslui', timepicker:'04:57', amount_profit: 1230, driver_name: 'Ovidiu', notes: 'Old lady'},
        {customer_name: 'Sergiu' , starting_point: 'Cluj', destination: 'Oradea', timepicker:'10:13', amount_profit: 4115, driver_name: 'Luca', notes: 'Blindness man'},
        {customer_name: 'Mihai' , starting_point: 'Ilfov', destination: 'Alba-Iulia', timepicker:'09:58', amount_profit: 3025, driver_name: 'Sebastian', notes: ''},
        {customer_name: 'Beni' , starting_point: 'Sibiu', destination: 'Arges', timepicker:'20:18', amount_profit: 4850, driver_name: 'Matei', notes: 'Waiting 5 minutes'},
    ]

    //TODO: You can make that service to use a function and to map it. 

    // getAllOrders(){
    //     return [
    //         {customer_name: 'Bogdan' , starting_point: 'Arad', destination: 'Timisoara', amount_profit: 200, driver_name: 'Bogdan'},
    //         {customer_name: 'David' , starting_point: 'Bucuresti', destination: 'Deva', amount_profit: 850, driver_name: 'Lucian'},
    //         {customer_name: 'Raul' , starting_point: 'Hateg', destination: 'Vaslui', amount_profit: 1230, driver_name: 'Ovidiu'},
    //     ]
    // }

}