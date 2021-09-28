import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MainCarsComponent } from "./main-cars.component";
import { inventoryCarsRoutes } from "./cars-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { SidenavRegardsCarsComponent } from './sidenavs/sidenav-regards-cars/sidenav-regards-cars.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidenavRegardsCarsDocumentsComponent } from './sidenavs/sidenav-regards-cars-documents/sidenav-regards-cars-documents.component';
import { SidenavRegardsCarsNotesComponent } from './sidenavs/sidenav-regards-cars-notes/sidenav-regards-cars-notes.component';

@NgModule({
    declarations: [
        MainCarsComponent,
        SidenavRegardsCarsComponent,
        SidenavRegardsCarsDocumentsComponent,
        SidenavRegardsCarsNotesComponent
    ],
    imports: [
        RouterModule.forChild(inventoryCarsRoutes),
        MatButtonToggleModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        SharedModule,
        FormsModule,
        NgbModule,
    ]
})
export class InventoryCarsModule { }