import { Routes } from '@angular/router';
import { PageFrameSidenavComponent } from 'src/app/shared/components/page-frame-sidenav/page-frame-sidenav.component';
import { PageFrameComponent } from 'src/app/shared/components/page-frame/page-frame.component';
import { MainCarsComponent } from './main-cars.component';
import { SidenavRegardsCarsComponent } from './sidenavs/sidenav-regards-cars/sidenav-regards-cars.component';

export const inventoryCarsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inventory/cars/main/(tab:general)',
  },
  {
    path: 'main',
    component: PageFrameComponent,
    children: [
      {
        path: 'general',
        outlet: 'tab',
        component: MainCarsComponent,
      },
      {
        path: ':tabName',
        outlet: 'sidenav',
        component: PageFrameSidenavComponent,
        children: [
          {
            path: 'info',
            component: SidenavRegardsCarsComponent,
          },
        ],
      },
    ],
  },
];
