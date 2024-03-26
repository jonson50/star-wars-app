import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild, inject } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { PeopleListComponent } from '../../components/people-list/people-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { IPeople } from '../../../../core/models/people.interface';
import { PeopleDetailsComponent } from '../../components/people-details/people-details.component';
import { DataService } from '../../../../core/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    PeopleListComponent,
    PeopleDetailsComponent
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);
  private readonly cd = inject(ChangeDetectorRef);

  public selectedPeople$!: Observable<IPeople | null>;
  public peopleList$ = this.dataService.peopleList$;
  private subscription!: Subscription;

  @ViewChild('detail')
  public detail!: MatSidenav;

  @Input() set id(value: string) {
    if(value) {
      this.dataService.findAndSelectPeople(value);
    }
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.selectedPeople$ = this.dataService.selectedPeople$.pipe(
      tap(people => {
        if (this.detail) {
          people ? this.detail.open() : this.detail.close();
        }
      })
    );
    this.cd.detectChanges()
    this.subscription = this.detail.closedStart.subscribe(() => {
      this.dataService.setSelectedPeople(null);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
