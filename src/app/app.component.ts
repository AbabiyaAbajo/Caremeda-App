import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';

import { filter } from 'rxjs/operators';

import { routeTransition } from '@core/animations';

import { AuthService } from '@core/services/auth.service';
import { BroadcastService } from './core/services/broadcast.service';
import { UserService } from '@core/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routeTransition]
})
export class AppComponent {
  title = 'caremada';

  headerTheme: string;

  user$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private broadcastService: BroadcastService,
    private router: Router, 
    private userService: UserService,
    ) {
    this.user$ = this.userService.user$;

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).forEach(e => {
      let headerTheme = this.activatedRoute.root.firstChild.snapshot.data['headerTheme'];

      if (!headerTheme) {
        headerTheme = 'light';
      }

      this.headerTheme = headerTheme;

      this.broadcastService.reset();
    });
  }

  onActivate(event) {
    window.scrollTo(0, 0);
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
