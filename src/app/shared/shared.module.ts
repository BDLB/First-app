import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { SidenavDriverComponent } from '../main-pages/queue/sidenavs/sidenav-driver/sidenav-driver.component';
import { SidenavDriversComponent } from '../main-pages/queue/sidenavs/sidenav-drivers/sidenav-drivers.component';

import { PageFrameSidenavComponent } from './components/page-frame-sidenav/page-frame-sidenav.component';

const routes: Routes = [
    { path: 'sidenav/drivers/:driver', component: SidenavDriversComponent },
    { path: 'sidenav/rate/:order', component: SidenavDriverComponent },
];
 
@NgModule({
    declarations: [
        SidenavDriverComponent,
        PageFrameSidenavComponent,
        SidenavDriversComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatTabsModule,
        MatSidenavModule,
    ],
    exports: [
        PageFrameSidenavComponent
    ]
})
export class SharedModule {}