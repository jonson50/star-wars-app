import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IPeople } from '../models/people.interface';
import { PeopleApiService } from './people-api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public readonly peopleService = inject(PeopleApiService);
  private readonly router = inject(Router);

  private peopleListSource: BehaviorSubject<IPeople[]> = new BehaviorSubject<IPeople[]>([]);
  public peopleList$: Observable<IPeople[]> = this.peopleListSource.asObservable();

  private selectedPeopleSource: BehaviorSubject<IPeople | null> = new BehaviorSubject<IPeople | null>(null);
  public selectedPeople$: Observable<IPeople | null> = this.selectedPeopleSource.asObservable();

  public setPeopleList(data: IPeople[]) {
    this.peopleListSource.next(data);
  }

  public setSelectedPeople(data: IPeople | null) {
    this.selectedPeopleSource.next(data);
    if (!data) this.router.navigateByUrl('/people');
  }

  public findAndSelectPeople(id: string) {
    const list = this.peopleListSource.getValue();
    const foundPeople = list.find(person => person.id == id)
    if (foundPeople) {
      this.setSelectedPeople(foundPeople);
    } else {
      this.setSelectedPeople(null)
    }
  }

  public getPeopleList(): Observable<IPeople[]> {
    return this.peopleService.getPeopleList().pipe(
      tap(
        list => this.peopleListSource.next(list)
      ));
  }
}
