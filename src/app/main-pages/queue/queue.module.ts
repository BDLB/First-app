import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
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

@NgModule({
    declarations:[
        SidenavDriversRegardComponent,
        SidenavRatesRegardComponent,
        NewCommandComponent,
        MainQueueComponent,
        CommandsComponent,
    ],
    imports:[
        RouterModule.forChild(queueRoutes),
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