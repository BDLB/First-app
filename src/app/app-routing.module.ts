import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { MainDriversComponent } from './main-pages/drivers/main-drivers.component';
import { MainInProgressComponent } from './main-pages/in-progress/main-in-progress.component';
import { MainPersonnelComponent } from './main-pages/personnel/main-personnel.component';
import { MainTrucksComponent } from './main-pages/trucks/main-trucks.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  // { path: '**', redirectTo: 'sign-in'},
  {
    path: 'sign-in',
    loadChildren: () =>
      import('src/app/auth/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'queue',
    loadChildren: () =>
      import('src/app/main-pages/queue/queue.module').then(
        (m) => m.QueueModule
      ),
  },
  {
    path: 'inventory/cars',
    loadChildren: () =>
      import('src/app/main-pages/cars/cars.module').then(
        (m) => m.InventoryCarsModule
      ),
  },
  // { path: 'drivers', component: MainDriversComponent },
  // { path: 'in-progress', component: MainInProgressComponent },
  // { path: 'personnel', component: MainPersonnelComponent },
  // { path: 'trucks', component: MainTrucksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
