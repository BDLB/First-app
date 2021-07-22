import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialSharedTextColumnComponent } from './components/material-shared-text-column/material-shared-text-column.component';
import { MaterialSharedTableComponent } from './components/material-shared-table/material-shared-table.component';
import { SidenavDriversComponent } from '../main-pages/queue/sidenavs/sidenav-drivers/sidenav-drivers.component';
import { SidenavDriverComponent } from '../main-pages/queue/sidenavs/sidenav-driver/sidenav-driver.component';
import { PageFrameTabComponent } from './components/page-frame-sidenav/page-frame-tab.component';

const routes: Routes = [
    { path: 'sidenav/drivers/:driver', component: SidenavDriversComponent },
    { path: 'sidenav/rate/:order', component: SidenavDriverComponent },
];
 
@NgModule({
    declarations: [
        MaterialSharedTextColumnComponent,
        MaterialSharedTableComponent,
        SidenavDriversComponent,
        SidenavDriverComponent,
        PageFrameTabComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        MatSidenavModule,
        MatTableModule,
        MatTabsModule,
        CommonModule,
    ],
    exports: [
        MaterialSharedTextColumnComponent,
        MaterialSharedTableComponent,
        PageFrameTabComponent,
    ]
})
export class SharedModule {}