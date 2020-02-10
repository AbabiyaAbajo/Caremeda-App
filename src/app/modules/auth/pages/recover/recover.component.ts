import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '@app/core/services/auth.service';
import { BroadcastService } from '@app/core/services/broadcast.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
})
export class RecoverComponent implements OnInit {
  formGroup1: FormGroup; // Email
  formGroup2: FormGroup; // Token
  formGroup3: FormGroup; // New password
  
  recoverData = {
    email: null,
    token: null,
    password: null,
  };

  showPassword = false;
  recoverStep = 1;
  msgError$: Observable<string>;
  working$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private broadcastService: BroadcastService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.working$ = this.broadcastService.working$;
    this.msgError$ = this.broadcastService.msgError$;

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }

    this.formGroup1 = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });

    this.formGroup2 = new FormGroup({
      'token': new FormControl('', [
        Validators.required,
      ]),
    });

    this.formGroup3 = new FormGroup({
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(step: number) {
    if (step === 1) {
      this.broadcastService.setWorking(true);

      let data = this.formGroup1.value;

      this.authService.recover(data).subscribe((resp) => {
        this.broadcastService.setWorking(false);
        ++this.recoverStep;
      });
    } else if (step === 2) {
      ++this.recoverStep;
    } else if (step === 3) {
      this.broadcastService.setWorking(true);

      let data = { ...this.formGroup1.value, ...this.formGroup2.value, ...this.formGroup3.value };

      this.authService.recover(data).subscribe((resp) => {
        this.broadcastService.setWorking(false);
        ++this.recoverStep;
      });
    }
  }
}
