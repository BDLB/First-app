import { Component, OnInit } from '@angular/core';
import { AngularFirestore    } from '@angular/fire/firestore';


@Component({
  selector: 'app-sidenav-drivers',
  templateUrl: './sidenav-drivers.component.html',
  styleUrls: ['./sidenav-drivers.component.scss']
})
export class SidenavDriversComponent implements OnInit {

  dataSource = [
    {driver_code: 10025, secondDriverCode: 20025, thirdDriverCode: 30025},
    {driver_code: 10026, secondDriverCode: 20026, thirdDriverCode: 30025},
    {driver_code: 10027, secondDriverCode: 20027, thirdDriverCode: 30025},
    {driver_code: 10028, secondDriverCode: 20028, thirdDriverCode: 30025},
    {driver_code: 10029, secondDriverCode: 20029, thirdDriverCode: 30025},
  ];

  constructor(public db: AngularFirestore) {}

  ngOnInit(): void {
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
