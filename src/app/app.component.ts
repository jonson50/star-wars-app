import { Component, DestroyRef, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef)

  public title = 'star-wars-app';
  public loading = true;

  ngOnInit() {
    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((routerEvent) => {
        this.checkRouterEvent(routerEvent as RouterEvent);
      });
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
}
