import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainQueueComponent } from "./main-queue.component";
import { SidenavDriversComponent } from "./sidenavs/sidenav-drivers/sidenav-drivers.component";
import { SidenavRatesComponent } from "./sidenavs/sidenav-rates/sidenav-rates.component";

const queueRoutes: Routes = [
    {
        path: 'queue', component: MainQueueComponent, 
        children: [
            { path: 'sidenav/drivers/:driver', component: SidenavDriversComponent },
            { path: 'sidenav/rates/:order', component: SidenavRatesComponent },
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(queueRoutes),
        ],
    exports: [RouterModule]
})
export class QueueRoutingModule {}