import { MatSidenavModule }                 from '@angular/material/sidenav';
import { MatToolbarModule }                 from '@angular/material/toolbar';
import { MatTableModule }                   from '@angular/material/table';
import { MatTabsModule }                    from '@angular/material/tabs';
import { CommonModule }                     from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { MaterialSharedTextColumnComponent } from './components/material-shared-text-column/material-shared-text-column.component';
import { MaterialSharedTableComponent }      from './components/material-shared-table/material-shared-table.component';
import { SidenavDriverComponent }            from '../main-pages/queue/sidenavs/sidenav-driver/sidenav-driver.component';
import { PageFrameSidenavComponent }         from './components/page-frame-sidenav/page-frame-sidenav.component';
import { BaseColumnComponent }               from './components/base-column/base-column.component';
import { PageFrameComponent }                from './components/page-frame/page-frame.component';
import { RouterModule }                      from '@angular/router';
import { SidenavComponent }                  from './components/sidenav-component/sidenav-component.component';
import { BrowserModule }                     from '@angular/platform-browser';


@NgModule( {
	declarations: [
		MaterialSharedTextColumnComponent,
		MaterialSharedTableComponent,
		PageFrameSidenavComponent,
		SidenavDriverComponent,
		BaseColumnComponent,
		PageFrameComponent,
		SidenavComponent,
	],
	imports: [
		RouterModule,
		MatSidenavModule,
		MatToolbarModule,
		MatTableModule,
		MatTabsModule,
		CommonModule,
		BrowserModule,
		NgModule ],
	exports: [
		MaterialSharedTextColumnComponent,
		MaterialSharedTableComponent,
		PageFrameComponent
	], schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
	],
} )
export class SharedModule {
}
