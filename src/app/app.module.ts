import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav-component/sidenav-component.component';
import { MainQueueComponent } from './main-pages/queue/main-queue.component';
import { MainInProgressComponent } from './main-pages/in-progress/main-in-progress.component';
import { MainCarsComponent } from './main-pages/cars/main-cars.component';
import { MainTrucksComponent } from './main-pages/trucks/main-trucks.component';
import { MainDriversComponent } from './main-pages/drivers/main-drivers.component';
import { MainPersonnelComponent } from './main-pages/personnel/main-personnel.component';
import { NewCommandComponent } from './main-pages/queue/new-command/new-command.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CommandsComponent } from './main-pages/queue/commands/commands.component';

const appRoutes:Routes = [
  { path: '', component: MainQueueComponent},
  { path: 'queue', component: MainQueueComponent},
  { path: 'cars', component: MainCarsComponent},
  { path: 'drivers', component: MainDriversComponent},
  { path: 'in-progress', component: MainInProgressComponent},
  { path: 'personnel', component: MainPersonnelComponent},
  { path: 'trucks', component: MainTrucksComponent},
  { path: '**', component: MainQueueComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainQueueComponent,
    MainInProgressComponent,
    MainCarsComponent,
    MainTrucksComponent,
    MainDriversComponent,
    MainPersonnelComponent,
    NewCommandComponent,
    CommandsComponent,

  ],
  imports: [
    NgxMaterialTimepickerModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
