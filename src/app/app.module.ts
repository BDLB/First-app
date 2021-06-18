import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { Routes,RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialSharedTextColumnComponent } from './shared/components/material-shared-text-column/material-shared-text-column.component';
import { MaterialSharedTableComponent } from './shared/components/material-shared-table/material-shared-table.component';
import { MainInProgressComponent } from './main-pages/in-progress/main-in-progress.component';
import { MainPersonnelComponent } from './main-pages/personnel/main-personnel.component';
import { SidenavComponent } from './sidenav-component/sidenav-component.component';
import { MainDriversComponent } from './main-pages/drivers/main-drivers.component';
import { MainTrucksComponent } from './main-pages/trucks/main-trucks.component';
import { MainCarsComponent } from './main-pages/cars/main-cars.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';import { QueueModule } from './main-pages/queue/queue.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QueueRoutingModule } from './main-pages/queue/queue-routing.module';

const appRoutes:Routes = [
  { path: '', redirectTo: '/queue', pathMatch: 'full' },
  { path: 'cars', component: MainCarsComponent},
  { path: 'drivers', component: MainDriversComponent},
  { path: 'in-progress', component: MainInProgressComponent},
  { path: 'personnel', component: MainPersonnelComponent},
  { path: 'trucks', component: MainTrucksComponent},
]

@NgModule({
  declarations: [
    SidenavComponent,
    AppComponent,
    MainInProgressComponent,
    MainCarsComponent,
    MainTrucksComponent,
    MainDriversComponent,
    MainPersonnelComponent,
    MaterialSharedTableComponent,
    MaterialSharedTextColumnComponent,
  ],
  imports: [
    BrowserModule,
    QueueModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
