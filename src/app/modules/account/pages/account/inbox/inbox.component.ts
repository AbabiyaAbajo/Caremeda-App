import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';

import { filter } from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';
import { ThreadService } from '@core/services/thread.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
})
export class InboxComponent implements OnInit {
  private threadsSubject = new BehaviorSubject<any>(null);
  threads$ = this.threadsSubject.asObservable();

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  toId: number = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private threadService: ThreadService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let id = parseInt(params['to']);

      if (!isNaN(id)) {
        this.toId = id;

        this.userService.get(id).subscribe((resp: any) => {
          console.log(resp.data);
          this.userSubject.next(resp.data);
        });
      } else {
        this.threadService.getAll().subscribe((resp: any) => {
          this.threadsSubject.next(resp.data.items);
        });
      }
    });
  }
}
