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
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { QueueRoutingModule } from "./queue-routing.module";
import { PageFrameSidenavComponent } from "src/app/shared/components/page-frame-sidenav/page-frame-sidenav.component";

@NgModule({
    declarations:[
    //     SidenavDriversComponent,
        PageFrameSidenavComponent,
        MainQueueComponent,
        CommandsComponent,
        NewCommandComponent,
    ],
    imports:[
        CommonModule ,
        FormsModule,
        ReactiveFormsModule,
        NgxMaterialTimepickerModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        NgbModule,
        QueueRoutingModule
    ]
})
export class QueueModule {}