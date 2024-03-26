import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild, inject } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { PeopleListComponent } from '../../components/people-list/people-list.component';
import { Observable, Subscription, tap } from 'rxjs';
import { IPeople } from '../../../../core/models/people.interface';
import { PeopleDetailsComponent } from '../../components/people-details/people-details.component';
import { DataService } from '../../../../core/services/data.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PeopleFormComponent } from '../../../../shared/components/people-form/people-form.component';
import { DeleteDialogComponent } from '../../../../shared/components/delete-dialog/delete-dialog.component';
import { KeyUpDirective } from '../../../../core/directives/key-up.directive';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    PeopleListComponent,
    PeopleDetailsComponent,
    KeyUpDirective
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements AfterViewInit {
  private readonly dataService = inject(DataService);
  private readonly cd = inject(ChangeDetectorRef);
  private readonly dialog = inject(MatDialog)

  public selectedPeople$!: Observable<IPeople | null>;
  public peopleList$ = this.dataService.peopleList$;
  private subscription!: Subscription;

  @ViewChild('detail')
  public detail!: MatSidenav;

  @Input() set id(value: string) {
    if (value) {
      this.dataService.findAndSelectPeople(value);
    }
  }

  public openNewDialog() {
    this.dialog.open(PeopleFormComponent);
  }

  ngAfterViewInit(): void {
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

  public onDelete(people: IPeople) {
    this.dialog.open(DeleteDialogComponent, {
      data: people,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
