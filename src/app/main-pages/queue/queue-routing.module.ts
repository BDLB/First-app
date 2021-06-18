import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { SidenavDriverComponent } from "./sidenavs/sidenav-driver/sidenav-driver.component";
import { MainQueueComponent } from "./main-queue.component";
import { SidenavDriversComponent } from "./sidenavs/sidenav-drivers/sidenav-drivers.component";

const queueRoutes: Routes = [
    {
        path: 'queue', component: MainQueueComponent, children: [
            { path: 'sidenav/drivers/:driver', component: SidenavDriversComponent },
            { path: 'sidenav/driver/:driver', component: SidenavDriverComponent },
            { path: 'sidenav/money/:order', component: SidenavDriverComponent },
            { path: 'sidenav/destination/:order', component: SidenavDriverComponent },
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