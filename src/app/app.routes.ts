import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'people',
        loadChildren: () => import('./modules/people/people.routes').then(r => r.PEOPLE_ROUTES)
      },
      { path: '**', pathMatch: 'full', redirectTo: 'people' },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
