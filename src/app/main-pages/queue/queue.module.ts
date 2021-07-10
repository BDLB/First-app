import { NgModule } from "@angular/core";

import { NewCommandComponent } from "./new-command/new-command.component";
import { CommandsComponent } from "./commands/commands.component";
import { MainQueueComponent } from "./main-queue.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { QueueRoutingModule } from "./queue-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { SidenavRatesComponent } from './sidenavs/sidenav-rates/sidenav-rates.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
const configFirebase = {
    production: false,
    valueCredentials: {
        apiKey: "AIzaSyAbSasv7VIVQEV97nqeizb2nuWiXyfvGXA",
        authDomain: "tutorial-30754.firebaseapp.com",
        projectId: "tutorial-30754",
        storageBucket: "tutorial-30754.appspot.com",
        messagingSenderId: "49230831190",
        appId: "1:49230831190:web:202193837863a10a02e5f7",
        measurementId: "G-SCLRLPM4GY"
    }
}

@NgModule({
    declarations:[
    //     SidenavDriversComponent,
        MainQueueComponent,
        CommandsComponent,
        NewCommandComponent,
        SidenavRatesComponent,
    ],
    imports:[AngularFireModule.initializeApp(configFirebase.valueCredentials),
        AngularFireDatabaseModule, // for database,
        NgxMaterialTimepickerModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        CommonModule,
        SharedModule,
        FormsModule,
        NgbModule,
        QueueRoutingModule
    ]
})
export class QueueModule {}