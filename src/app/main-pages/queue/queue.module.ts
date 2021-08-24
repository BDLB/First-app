import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { NewCommandComponent } from "./new-command/new-command.component";
import { CommandsComponent } from "./commands/commands.component";
import { MainQueueComponent } from "./main-queue.component";
import { SharedModule } from "src/app/shared/shared.module";
import { queueRoutes } from "./queue-routing.module";
import { SidenavDriversRegardComponent } from './sidenavs/sidenav-drivers-regard/sidenav-drivers-regard.component';
import { SidenavRatesRegardComponent } from './sidenavs/sidenav-rates-regard/sidenav-rates-regard.component'

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
        SidenavDriversRegardComponent,
        SidenavRatesRegardComponent,
        NewCommandComponent,
        MainQueueComponent,
        CommandsComponent,
    ],
    imports:[AngularFireModule.initializeApp(configFirebase.valueCredentials),
        RouterModule.forChild(queueRoutes),
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
    ]
})
export class QueueModule {}