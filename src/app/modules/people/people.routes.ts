import { Routes } from '@angular/router';
import { PeopleComponent } from './pages/people/people.component';
import { inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';

export const PEOPLE_ROUTES: Routes = [
  {
    path: '',
    resolve: { resolveFoo: () => {
        const service = inject(DataService)
        return service.getPeopleList();
    } },
    component: PeopleComponent
  }
];
