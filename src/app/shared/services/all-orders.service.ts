import { Injectable } from '@angular/core';
import { ICommands } from 'src/app/shared/interfaces/.interfaces'

@Injectable({
    providedIn: 'root'
})

export class AllOrders{
    allOrders: ICommands[] = [
        {customer_name: 'Bogdan', id:102654, starting_point: 'Arad', destination: 'Timisoara', timepicker:'15:35', amount_profit: 200, driver_name: 'Bogdan', notes: 'A lot of luggage'},
        {customer_name: 'David' ,id:102655, starting_point: 'Bucuresti', destination: 'Deva', timepicker:'06:35', amount_profit: 850, driver_name: 'Lucian', notes: 'She has a pet'},
        {customer_name: 'Raul' ,id:102656, starting_point: 'Hateg', destination: 'Vaslui', timepicker:'04:57', amount_profit: 1230, driver_name: 'Ovidiu', notes: 'Old lady'},
        {customer_name: 'Sergiu' ,id:102650, starting_point: 'Cluj', destination: 'Oradea', timepicker:'10:13', amount_profit: 4115, driver_name: 'Luca', notes: 'Blindness man'},
        {customer_name: 'Mihai' ,id:102652, starting_point: 'Ilfov', destination: 'Alba-Iulia', timepicker:'09:58', amount_profit: 3025, driver_name: 'Sebastian', notes: ''},
        {customer_name: 'Jamison' ,id:102649, starting_point: 'Sibiu', destination: 'Arges', timepicker:'20:18', amount_profit: 4850, driver_name: 'Matei', notes: 'Waiting 5 minutes'},
        {customer_name: 'Hamlet' ,id:102645, starting_point: 'Damasc ', destination: 'Onesti ', timepicker:'20:18', amount_profit: 4850, driver_name: 'Matei', notes: 'Waiting 5 minutes'},
        {customer_name: 'Georgy' ,id:102638, starting_point: 'Rio de Janeiro', destination: 'Osaka ', timepicker:'20:18', amount_profit: 4850, driver_name: 'Matei', notes: 'Waiting 5 minutes'},
        {customer_name: 'Ryan' ,id:102640, starting_point: 'Tianjin ', destination: 'Washington ', timepicker:'20:18', amount_profit: 4850, driver_name: 'Matei', notes: 'Waiting 5 minutes'},
        {customer_name: 'Tom' ,id:102635, starting_point: 'Seattle', destination: 'Essen ', timepicker:'20:18', amount_profit: 4850, driver_name: 'Matei', notes: 'Waiting 5 minutes'},
        {customer_name: 'Ethan' ,id:102633, starting_point: 'Alexandria ', destination: 'Sidney ', timepicker:'20:18', amount_profit: 4850, driver_name: 'Matei', notes: 'Waiting 5 minutes'},
        {customer_name: 'Erwin' ,id:102628, starting_point: 'SANTIAGO', destination: 'Toronto', timepicker:'20:18', amount_profit: 4850, driver_name: 'Matei', notes: 'Waiting 5 minutes'},
        {customer_name: 'Edgar' ,id:102660, starting_point: 'Chicago ', destination: 'Bangalore', timepicker:'20:18', amount_profit: 4850, driver_name: 'Matei', notes: 'Waiting 5 minutes'},
        {customer_name: 'Aaron' ,id:102665, starting_point: 'Cairo ', destination: 'BUENOS AIRES', timepicker:'20:18', amount_profit: 4850, driver_name: 'Matei', notes: 'Waiting 5 minutes'},
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