import { Component, DestroyRef, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DataService } from '../../../core/services/data.service';
import { IPeople } from '../../../core/models/people.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-people-form',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  templateUrl: './people-form.component.html',
  styleUrl: './people-form.component.scss'
})
export class PeopleFormComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly dataService = inject(DataService);
  private readonly destroyRef = inject(DestroyRef)

  constructor(
    public dialogRef: MatDialogRef<PeopleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
    this.dataService.startSavedPerson();
    this.dataService.savedPerson$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((end) => {
      if (end) this.dialogRef.close();
    })
  }

  public form = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    height: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(999)]),
    mass: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(9999)]),
    birthYear: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.form.get('name');
  }

  get height() {
    return this.form.get('height');
  }

  get mass() {
    return this.form.get('mass');
  }

  get birthYear() {
    return this.form.get('birthYear');
  }

  get gender() {
    return this.form.get('gender');
  }

  onSubmit() {
    console.log(this.form.value);
    const person: IPeople = {
      birth_year: this.form.value.birthYear ?? '',
      id: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      homeworld: '',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      url: '',
      name: this.form.value.name ?? '',
      height: this.form.value.height?.toString() ?? '',
      mass: this.form.value.mass?.toString() ?? '',
      gender: this.form.value.gender ?? '',
    };
    this.dataService.addPersonToList(person)
  }

  public onCancelClick() {
    this.dialogRef.close();
  }

}

