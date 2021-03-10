import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav-component/sidenav-component.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainQueueComponent } from './main-queue/main-queue.component';
import { MainInProgressComponent } from './main-in-progress/main-in-progress.component';
import { MainCarsComponent } from './main-cars/main-cars.component';
import { MainTrucksComponent } from './main-trucks/main-trucks.component';
import { MainDriversComponent } from './main-drivers/main-drivers.component';
import { MainPersonnelComponent } from './main-personnel/main-personnel.component';
import { NewCommandComponent } from './main-queue/new-command/new-command.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainContentComponent,
    MainQueueComponent,
    MainInProgressComponent,
    MainCarsComponent,
    MainTrucksComponent,
    MainDriversComponent,
    MainPersonnelComponent,
    NewCommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
