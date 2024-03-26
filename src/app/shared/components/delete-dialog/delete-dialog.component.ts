import { Component, DestroyRef, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IPeople } from '../../../core/models/people.interface';
import { DataService } from '../../../core/services/data.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {
  private readonly dataService = inject(DataService);
  private readonly destroyRef = inject(DestroyRef)

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPeople) { }

  ngOnInit() {
    this.dataService.startSavedPerson();
    this.dataService.savedPerson$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((end) => {
      if (end) this.dialogRef.close();
    })
  }

  public onCancelClick() {
    this.dialogRef.close();
  }

  public onDelete() {
    this.dataService.deletePerson(this.data.id);
  }

}
