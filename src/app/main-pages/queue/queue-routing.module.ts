import { Routes } from "@angular/router";

import { PageFrameSidenavComponent } from "src/app/shared/components/page-frame-sidenav/page-frame-sidenav.component";
import { SidenavDriversRegardComponent } from "./sidenavs/sidenav-drivers-regard/sidenav-drivers-regard.component";
import { PageFrameComponent } from "src/app/shared/components/page-frame/page-frame.component";
import { MainQueueComponent } from "./main-queue.component";
import { SidenavRatesRegardComponent } from "./sidenavs/sidenav-rates-regard/sidenav-rates-regard.component";

export const queueRoutes: Routes = [
    {
        path: 'general',
        component: PageFrameComponent,
        children: [
            {
                path: 'queue',
                outlet: 'tab',
                component: MainQueueComponent
            },
            {
                path: ':tabName/:id',
                outlet: 'sidenav',
                component: PageFrameSidenavComponent,
                children: [
                    {
                        path: 'bookDriver',
                        component: SidenavDriversRegardComponent
                    },
                    {
                        path: 'bookRate',
                        component: SidenavRatesRegardComponent
                    }

                ]
            }
        ]
    }
]