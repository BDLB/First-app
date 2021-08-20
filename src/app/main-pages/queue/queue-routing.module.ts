import { Routes } from "@angular/router";

import { PageFrameComponent } from "src/app/shared/components/page-frame/page-frame.component";
import { SidenavDriversComponent } from "./sidenavs/sidenav-drivers/sidenav-drivers.component";
import { SidenavRatesComponent } from "./sidenavs/sidenav-rates/sidenav-rates.component";
import { MainQueueComponent } from "./main-queue.component";

export const queueRoutes: Routes = [
    {
        path: 'general', component: PageFrameComponent,
        children: [
            {
                path: 'queue',
                outlet: 'tab',
                component: MainQueueComponent
            }
        ]
    }
]