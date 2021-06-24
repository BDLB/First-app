import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialSharedTextColumnComponent } from './shared/components/material-shared-text-column/material-shared-text-column.component';
import { MaterialSharedTableComponent } from './shared/components/material-shared-table/material-shared-table.component';
import { SidenavComponent } from './shared/components/sidenav-component/sidenav-component.component';
import { MainInProgressComponent } from './main-pages/in-progress/main-in-progress.component';
import { MainPersonnelComponent } from './main-pages/personnel/main-personnel.component';
import { MainDriversComponent } from './main-pages/drivers/main-drivers.component';
import { MainTrucksComponent } from './main-pages/trucks/main-trucks.component';
import { MainCarsComponent } from './main-pages/cars/main-cars.component';
import { QueueModule } from './main-pages/queue/queue.module';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    MaterialSharedTextColumnComponent,
    MaterialSharedTableComponent,
    MainInProgressComponent,
    MainPersonnelComponent,
    MainDriversComponent,
    MainTrucksComponent,
    MainCarsComponent,
    SidenavComponent,
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSidenavModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    BrowserModule,
    FormsModule,
    QueueModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
