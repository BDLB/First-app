import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialSharedTextColumnComponent } from './components/material-shared-text-column/material-shared-text-column.component';
import { MaterialSharedTableComponent } from './components/material-shared-table/material-shared-table.component';
import { SidenavDriverComponent } from '../main-pages/queue/sidenavs/sidenav-driver/sidenav-driver.component';
import { PageFrameSidenavComponent } from './components/page-frame-sidenav/page-frame-sidenav.component';
import { BaseColumnComponent } from './components/base-column/base-column.component';
import { PageFrameComponent } from './components/page-frame/page-frame.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MaterialSharedTextColumnComponent,
        MaterialSharedTableComponent,
        PageFrameSidenavComponent,
        SidenavDriverComponent,
        BaseColumnComponent,
        PageFrameComponent,
    ],
    imports: [
        RouterModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatTabsModule,
        CommonModule,
    ],
    exports: [
        MaterialSharedTextColumnComponent,
        MaterialSharedTableComponent,
    ]
})
export class SharedModule { }