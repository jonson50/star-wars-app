import { Component, Input } from '@angular/core';
import { IPeople } from '../../../../core/models/people.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-people-details',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './people-details.component.html',
  styleUrl: './people-details.component.scss'
})
export class PeopleDetailsComponent {
  @Input()
  people: IPeople | undefined;

}
