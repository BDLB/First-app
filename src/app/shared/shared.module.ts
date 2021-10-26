import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialSharedActionsColumnComponent } from './components/material-table-components/.material-table-components';
import { MaterialSharedTextColumnComponent } from './components/material-table-components/.material-table-components';
import { MaterialSharedTableComponent } from './components/material-table-components/.material-table-components';
import { PageFrameSidenavComponent } from './components/page-frame-sidenav/page-frame-sidenav.component';
import { DatetimePickerComponent } from './components/datetime-picker/datetime-picker.component';
import { SharedTooltipComponent } from './components/shared-tooltip/shared-tooltip.component';
import { BaseColumnComponent } from './components/base-column/base-column.component';
import { PageFrameComponent } from './components/page-frame/page-frame.component';
import { RouterModule } from '@angular/router';
import { SharedTooltipsDocumentsComponent } from './components/shared-tooltips-documents/shared-tooltips-documents.component';

@NgModule({
    declarations: [
        MaterialSharedActionsColumnComponent,
        MaterialSharedTextColumnComponent,
        MaterialSharedTableComponent,
        PageFrameSidenavComponent,
        DatetimePickerComponent,
        SharedTooltipComponent,
        BaseColumnComponent,
        PageFrameComponent,
        SharedTooltipsDocumentsComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatTabsModule,
        CommonModule,
    ],
    exports: [
        MaterialSharedActionsColumnComponent,
        MaterialSharedTextColumnComponent,
        SharedTooltipsDocumentsComponent,
        MaterialSharedTableComponent,
        DatetimePickerComponent,
        SharedTooltipComponent,
        CommonModule
    ]
})
export class SharedModule { }