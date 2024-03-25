import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/components/main-layout/main-layout.component').then(m => m.MainLayoutComponent)
  }
];
