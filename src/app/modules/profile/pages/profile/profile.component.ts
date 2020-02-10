import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;

    if (!parseInt(id)) {
      this.router.navigate(['/']);
    }

    this.userService.get(id).subscribe((resp: any) => {
      this.userSubject.next(resp.data);
    })
  }

  message() {
    this.router.navigate(['/account/inbox'], { queryParams: { to: this.userSubject.getValue().id } });
  }
}
