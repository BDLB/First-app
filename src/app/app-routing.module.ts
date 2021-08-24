import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCarsComponent } from './main-pages/cars/main-cars.component';
import { MainDriversComponent } from './main-pages/drivers/main-drivers.component';
import { MainInProgressComponent } from './main-pages/in-progress/main-in-progress.component';
import { MainPersonnelComponent } from './main-pages/personnel/main-personnel.component';
import { MainTrucksComponent } from './main-pages/trucks/main-trucks.component';

const routes: Routes = [
  { path: '', redirectTo: '/general/(tab:queue)', pathMatch: 'full' },
  { path: 'cars', component: MainCarsComponent},
  { path: 'drivers', component: MainDriversComponent},
  { path: 'in-progress', component: MainInProgressComponent},
  { path: 'personnel', component: MainPersonnelComponent},
  { path: 'trucks', component: MainTrucksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
