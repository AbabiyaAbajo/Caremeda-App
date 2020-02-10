import { Component, OnInit } from '@angular/core';

import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  user$ = null;

  constructor(
    private userService: UserService,
  ) {

  }

  // private reset() {
  //   this.user$ = null;
  //
  //   this.workOffersBookedAsServiceProvider$ = null;
  //   this.workOffersBookedAsClient$ = null;
  // }

  ngOnInit() {
    this.user$ = this.userService.user$;
  }

  isServiceProvider() {
    return this.userService.isServiceProvider();
  }
}
