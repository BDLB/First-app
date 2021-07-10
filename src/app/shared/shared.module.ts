import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { SidenavDriverComponent } from '../main-pages/queue/sidenavs/sidenav-driver/sidenav-driver.component';
import { SidenavDriversComponent } from '../main-pages/queue/sidenavs/sidenav-drivers/sidenav-drivers.component';
import { MaterialSharedTableComponent } from './components/material-shared-table/material-shared-table.component';
import { MaterialSharedTextColumnComponent } from './components/material-shared-text-column/material-shared-text-column.component';
import {MatTableModule} from '@angular/material/table';

import { PageFrameSidenavComponent } from './components/page-frame-sidenav/page-frame-sidenav.component';


const routes: Routes = [
    { path: 'sidenav/drivers/:driver', component: SidenavDriversComponent },
    { path: 'sidenav/rate/:order', component: SidenavDriverComponent },
];
 
@NgModule({
    declarations: [
        MaterialSharedTextColumnComponent,
        MaterialSharedTableComponent,
        SidenavDriverComponent,
        PageFrameSidenavComponent,
        SidenavDriversComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatTabsModule,
        MatSidenavModule,
        MatTableModule
    ],
    exports: [
        PageFrameSidenavComponent,
        MaterialSharedTextColumnComponent,
        MaterialSharedTableComponent
    ]
})
export class SharedModule {}