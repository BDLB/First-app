import { Routes } from '@angular/router';

import { SidenavRegardsCarsDocumentsComponent } from './sidenavs/sidenav-regards-cars-documents/sidenav-regards-cars-documents.component';
import { SidenavRegardsCarsNotesComponent } from './sidenavs/sidenav-regards-cars-notes/sidenav-regards-cars-notes.component';
import { PageFrameSidenavComponent } from 'src/app/shared/components/page-frame-sidenav/page-frame-sidenav.component';
import { SidenavRegardsCarsComponent } from './sidenavs/sidenav-regards-cars/sidenav-regards-cars.component';
import { PageFrameComponent } from 'src/app/shared/components/page-frame/page-frame.component';
import { MainCarsComponent } from './main-cars.component';
import { RegardsCarsConfigResolver, RegardsCarsDocsResolver, RegardsCarsResolver } from 'src/app/shared/resolvers/.resolvers';

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
            resolve: {
              config: RegardsCarsConfigResolver,
              driver: RegardsCarsResolver
            }
          },
          {
            path: 'docs',
            component: SidenavRegardsCarsDocumentsComponent,
            resolve: {
              document: RegardsCarsDocsResolver
            }
          },
          {
            path: 'notes',
            component: SidenavRegardsCarsNotesComponent,
          }
        ],
      },
    ],
  },
];
