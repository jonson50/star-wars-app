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
  private tempoList: IPeople[] = [];

  private peopleListSource: BehaviorSubject<IPeople[]> = new BehaviorSubject<IPeople[]>([]);
  public peopleList$: Observable<IPeople[]> = this.peopleListSource.asObservable();

  private selectedPeopleSource: BehaviorSubject<IPeople | null> = new BehaviorSubject<IPeople | null>(null);
  public selectedPeople$: Observable<IPeople | null> = this.selectedPeopleSource.asObservable();

  private savedPersonSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public savedPerson$: Observable<boolean> = this.savedPersonSource.asObservable();

  public setPeopleList(data: IPeople[]) {
    this.peopleListSource.next(data);
  }

  public setSelectedPeople(data: IPeople | null) {
    this.selectedPeopleSource.next(data);
    if (!data) this.router.navigateByUrl('/people');
  }

  public addPersonToList(person: IPeople) {
    const list = this.peopleListSource.getValue();
    person.id = this.generateGUID();
    list.push(person);
    this.setPeopleList(list);
    this.tempoList = [ ...list ];
    this.savedPersonSource.next(true);
  }

  public startSavedPerson() {
    this.savedPersonSource.next(false);
  }

  public deletePerson(id: string) {
    const list = this.peopleListSource.getValue();
    const newList = list.filter(p => p.id !== id)
    this.setPeopleList(newList);
    this.tempoList = [ ...this.tempoList.filter(p => p.id !== id) ];
    this.selectedPeopleSource.next(null);
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

  public searchPerson(filter: string) {
    if(filter.length) {
      const list = [ ...this.tempoList ];
      const searchedList = list.filter(p => p.name.toUpperCase().includes(filter.toUpperCase()));
      this.setPeopleList(searchedList);
    } else {
      this.setPeopleList([ ...this.tempoList ]);
    }
  }

  public getPeopleList(): Observable<IPeople[]> {
    return this.peopleService.getPeopleList().pipe(
      tap(
        list => {
          this.setPeopleList(list);
          this.tempoList = [ ...list ];
        }
      ));
  }

  private generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
