import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore    } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-sidenav-drivers',
  templateUrl: './sidenav-drivers.component.html',
  styleUrls: ['./sidenav-drivers.component.scss']
})
export class SidenavDriversComponent implements OnInit {
  
  items: Observable<any[]>;

  dataSource = [
    {driver_code: 10025, availability: "on", notes:"Need to wear mask", last_location:"ads", last_delivery:"",miles: 123, earnings: 123, target:123},
    {driver_code: 10025, availability: "on", notes:"Need to wear mask", last_location:"ads", last_delivery:"",miles: 123, earnings: 123, target:123},
    {driver_code: 10025, availability: "on", notes:"Need to wear mask", last_location:"ads", last_delivery:"",miles: 123, earnings: 123, target:123},
    {driver_code: 10025, availability: "on", notes:"Need to wear mask", last_location:"ads", last_delivery:"",miles: 123, earnings: 123, target:123},
    {driver_code: 10025, availability: "on", notes:"Need to wear mask", last_location:"ads", last_delivery:"",miles: 123, earnings: 123, target:123},
    {driver_code: 10025, availability: "on", notes:"Need to wear mask", last_location:"ads", last_delivery:"",miles: 123, earnings: 123, target:123},
    {driver_code: 10025, availability: "on", notes:"Need to wear mask", last_location:"ads", last_delivery:"",miles: 123, earnings: 123, target:123},
    {driver_code: 10025, availability: "on", notes:"Need to wear mask", last_location:"ads", last_delivery:"",miles: 123, earnings: 123, target:123},
    {driver_code: 10025, availability: "on", notes:"Need to wear mask", last_location:"ads", last_delivery:"",miles: 123, earnings: 123, target:123}
  ];
  displayedColumns: string[] = Object.keys(this.dataSource[0]);
  data : any

  constructor(public db: AngularFirestore) {
   }

  ngOnInit(): void {
  //   console.log(this.displayedColumns)
  //   new Promise<any>((resolve, reject) =>{
  //    this.db
  //         .collection("comanda")
  //         .snapshotChanges().pipe(map(changes =>
  //           changes.map(c =>
  //             ({ id: c.payload.doc.id, ...c.payload.doc.data() as any})
  //           )
  //         )).subscribe(resp => this.data = resp)
  // });
  }

}
