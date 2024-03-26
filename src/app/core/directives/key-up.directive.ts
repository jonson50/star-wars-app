import { Directive, ElementRef, inject } from '@angular/core';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[appKeyUp]',
  standalone: true
})
export class KeyUpDirective {
  private readonly dataService = inject(DataService);

  constructor(ref: ElementRef<HTMLElement>) {
    ref.nativeElement.addEventListener('keyup', (event) => {
      const filter = (event.target as HTMLInputElement).value;
      this.dataService.searchPerson(filter);
    });
  }

}
