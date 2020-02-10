import { Component, OnInit } from '@angular/core';

import { WorkOfferService } from '@core/services/work-offer.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  user$ = null;

  constructor(
    private workOfferService: WorkOfferService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user$ = this.userService.user$;
  }

  get isServiceProvider() {
    return this.userService.isServiceProvider();
  }
}
