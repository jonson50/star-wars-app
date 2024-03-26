import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { IPeople } from '../../../../core/models/people.interface';
import { Router } from '@angular/router';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule
  ],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent {
  private readonly router = inject(Router);
  private readonly dataService = inject(DataService);

  @Input()
  peopleList: IPeople[] = [];

  @Output()
  onDeleteEvent: EventEmitter<IPeople> = new EventEmitter<IPeople>();

  public selectPerson(data: IPeople) {
    this.router.navigateByUrl(`/people?id=${data.id}`);
  }

  public onDelete(person: IPeople) {
    this.onDeleteEvent.emit(person)
  }

}
