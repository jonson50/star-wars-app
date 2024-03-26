import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, concatMap, of } from 'rxjs';
import { IPeople } from '../models/people.interface';
import { IPeopleResponse } from '../models/people-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/people/`;
  private peopleList: IPeople[] = [];

  public getPeopleList(url?: string): Observable<IPeople[]> {
    const baseURL = url ?? this.baseUrl
    if (!url) this.peopleList = [];

    return this.http.get<IPeopleResponse>(baseURL).pipe(
      concatMap(data => {
        data.results.forEach(people => this.peopleList.push(people))
        if (data.next) {
          return this.getPeopleList(data.next)
        }
        for (let i = 0; i < this.peopleList.length; i++) {
          this.peopleList[i].id = (i + 1).toString()
        }
        return of(this.peopleList)
      })
    );
  }
}
