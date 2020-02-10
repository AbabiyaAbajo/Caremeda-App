import { AfterViewInit, Component, OnInit, HostListener, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '@core/services/auth.service';
import { WorkOfferService } from '@core/services/work-offer.service';
import { UserService } from '@core/services/user.service';

import { ClientAuthGuard } from '@core/guards/client-auth.guard';
import { BehaviorSubject, fromEventPattern } from 'rxjs';
import { $ } from 'protractor';
declare var jQuery: any;
declare var NavbarCollapse;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() headerTheme;
  
  isSticky = false;

  // auth$ = null;
  // user$ = null;

  loginData = {
    email: 'jasonmac5@gmail.com',
    password: 'fhRwLiwerf049346',
    remember: true,
  };

  user$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private workOfferService: WorkOfferService,
    private clientAuthGuard: ClientAuthGuard,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    // this.auth$ = this.authService.auth$;
    // this.user$ = this.userService.userData$;
    this.user$ = this.userService.user$;

    if (this.authService.isLoggedIn()) {
      this.userService.getSelf().subscribe((resp) => {
        // console.log(resp);
      });
    }
    //HACK to make popper menu work. Recreates code that is in purpose.js  (NavbarCollapse)
 
    var e = jQuery("#navbar-main"),
    t = jQuery("#navbar-main-collapse"),
    a = jQuery("#navbar-top-main");
    t.length && (t.on({
      "show.bs.collapse": function() {
        e.addClass("navbar-collapsed"), a.addClass("navbar-collapsed"), jQuery("#header-main").addClass("header-collapse-show")
      }
    }), t.on({
        "hide.bs.collapse": function() {
        t.removeClass("collapsing").addClass("collapsing-out"), e.removeClass("navbar-collapsed").addClass("navbar-collapsed-out"), a.removeClass("navbar-collapsed").addClass("navbar-collapsed-out")
      }
    }), t.on({
        "hidden.bs.collapse": function() {
        t.removeClass("collapsing-out"), e.removeClass("navbar-collapsed-out"), a.removeClass("navbar-collapsed-out"), jQuery("#header-main").removeClass("header-collapse-show")
      }
    }));
  }

  ngAfterViewInit() {
    // this.auth$.subscribe((isLoggedIn) => {
    //   if (isLoggedIn) {
    //     this.userService.getSelf();

    //     // this.modalLogin.close();
    //   }
    // });



    // this.user$.subscribe((user) => {
    //   // if (user) {
    //   //   this.workOfferService.getBookedOffersAsClient();
    //   //
    //   //   if (this.userService.isServiceProvider()) {
    //   //     this.workOfferService.getBookedOffersAsServiceProvider();
    //   //   }
    //   // }
    // });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

  // TODO Temperary... remove when login page is created.
  login() {
    this.authService.login(this.loginData).subscribe((resp) => {
      // this.user$.next(resp.data.user);
      this.userService.setSelf(resp.data.user);
    });
  }

  logout() {
    this.authService.logout();
    this.userService.destroySelf();

    this.clientAuthGuard.canActivate(
      this.activatedRoute.snapshot,
      this.router.routerState.snapshot
    );
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get isServiceProvider() {
    return this.userService.isServiceProvider();
  }
}
