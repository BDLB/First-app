import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AllOrders{
    allOrders: {
        customer_name: string,
        starting_point: string,
        destination: string,
        amount_profit: number,
        driver_name: string
    }[] = [
        {customer_name: 'Bogdan' , starting_point: 'Arad', destination: 'Timisoara', amount_profit: 200, driver_name: 'Bogdan'},
        {customer_name: 'David' , starting_point: 'Bucuresti', destination: 'Deva', amount_profit: 850, driver_name: 'Lucian'},
        {customer_name: 'Raul' , starting_point: 'Hateg', destination: 'Vaslui', amount_profit: 1230, driver_name: 'Ovidiu'},
        {customer_name: 'Sergiu' , starting_point: 'Cluj', destination: 'Oradea', amount_profit: 4115, driver_name: 'Luca'},
        {customer_name: 'Mihai' , starting_point: 'Ilfov', destination: 'Alba-Iulia', amount_profit: 3025, driver_name: 'Sebastian'},
        {customer_name: 'Beni' , starting_point: 'Sibiu', destination: 'Arges', amount_profit: 4850, driver_name: 'Matei'},
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