import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '@core/services/auth.service';
import { BroadcastService } from '@core/services/broadcast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: '',
    remember: true,
  };

  private verification = {
    email: '',
    token: '',
  };

  isVerified = false;
  verificationMessage: string;
  msgError$: Observable<string>;
  working$: Observable<boolean>;

  constructor(
    private authService: AuthService, 
    private activatedRoute: ActivatedRoute, 
    private broadcastService: BroadcastService,
    private router: Router,
  ) {
    this.activatedRoute.data.subscribe(data => {
      if (data.verify && data.verify === true) {
        this.activatedRoute.queryParams.subscribe(params => {
          this.verification.email = params.email;
          this.verification.token = params.token;

          this.authService.verify(this.verification).subscribe(() => {
            this.verificationMessage = 'Your account has been verified. You can now login.'
            this.isVerified = true;
          });
        });
      } else {
        this.isVerified = true;
      }
    });
  }

  ngOnInit() {
    this.working$ = this.broadcastService.working$;
    this.msgError$ = this.broadcastService.msgError$;

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    if (!this.loginData.email || !this.loginData.password) {
      return;
    }

    this.broadcastService.setWorking(true);

    this.authService.login(this.loginData).subscribe((resp) => {
      this.router.navigate(['/account/dashboard']);
    });
  }
}
