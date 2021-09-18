import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MainCarsComponent } from "./main-cars.component";
import { inventoryCarsRoutes } from "./cars-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { SidenavRegardsCarsComponent } from './sidenavs/sidenav-regards-cars/sidenav-regards-cars.component';

@NgModule({
    declarations: [
        MainCarsComponent,
        SidenavRegardsCarsComponent
    ],
    imports: [
        RouterModule.forChild(inventoryCarsRoutes),
        SharedModule
    ]
})
export class InventoryCarsModule { }