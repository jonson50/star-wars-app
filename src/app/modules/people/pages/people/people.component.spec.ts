import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PeopleComponent } from './people.component';
import { DataService } from '../../../../core/services/data.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PeopleFormComponent } from '../../../../shared/components/people-form/people-form.component';
import { DeleteDialogComponent } from '../../../../shared/components/delete-dialog/delete-dialog.component';
import { IPeople } from '../../../../core/models/people.interface';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EventEmitter } from '@angular/core';
import { PeopleApiService } from '../../../../core/services/people-api.service';

export class MockPeopleApiService {
  peopleList: IPeople[] = []
}

export class MockDataService {
  peopleList$ = of([]); // Simulate an empty list of people
  selectedPeople$ = of(null); // Simulate no selected person initially
  savedPerson$ = of(false);
  tempoList = [];
  getPeopleList = () => of([]);
  // Simulate finding and selecting a person by ID
  findAndSelectPeople(id: string): void { }
  // Simulate setting the selected person
  setSelectedPeople(people: IPeople | null): void { }
  deletePerson(id: string) {}
  startSavedPerson(): void {}
  addPersonToList(person: IPeople) {}
}

export class MockMatDialog {
  // Simulate opening a dialog
  open(component: any, config?: any): MatDialogRef<any> {
     return {
       afterClosed: () => of({}), // Simulate the dialog being closed
       close: () => {} // Simulate closing the dialog
     } as MatDialogRef<any>;
  }
 }

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;
  let dataService: DataService;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PeopleComponent,
        PeopleFormComponent,
        DeleteDialogComponent,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatSidenavModule,
        MatDialogModule,
        MatButtonModule,
        HttpClientModule
      ],
      providers: [
        PeopleApiService,
        { provide: DataService, useClass: MockDataService },
        { provide: PeopleApiService, useClass: MockPeopleApiService },
        { provide: MatDialog, useClass: MockMatDialog }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    dialog = TestBed.inject(MatDialog);
    component.ngAfterViewInit();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call findAndSelectPeople on id set', () => {
    const spy = spyOn(dataService, 'findAndSelectPeople');
    const id = '123';
    component.id = id;
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('should open PeopleFormComponent dialog when openNewDialog is called', () => {
    const openDialogSpy = spyOn(component.dialog, 'open');
    component.openNewDialog();
    expect(openDialogSpy).toHaveBeenCalledWith(PeopleFormComponent);
  });

  it('should open DeleteDialogComponent dialog when onDelete is called', () => {
    const people: IPeople = {
      birth_year: '1982',
      id: '12',
      hair_color: 'brown',
      skin_color: 'latin',
      eye_color: 'black',
      homeworld: 'earth',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      url: '',
      name: 'John Bermeo',
      height: '173',
      mass: '73',
      gender: 'male',
    };
    const openDialogSpy = spyOn(component.dialog, 'open');
    component.onDeletePerson(people);
    expect(openDialogSpy).toHaveBeenCalled();
    expect(openDialogSpy).toHaveBeenCalledWith(DeleteDialogComponent, { data: people });
  });
});
