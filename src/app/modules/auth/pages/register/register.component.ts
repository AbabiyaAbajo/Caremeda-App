import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as countryCityState from 'countrycitystatejson';

import { AuthService } from '@core/services/auth.service';
import { BroadcastService } from '@core/services/broadcast.service';
import { UserService } from '@core/services/user.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  formGroup1: FormGroup;
  formGroup2: FormGroup;

  registrationData = {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    birthDate: null,
    phoneNumber: null,
    address: null,
    addressLine2: null,
  };

  private addressParts = {
    addressLine1: null,
    city: null,
    area: null,
    postalCode: null,
    country: 'CA',
  };

  showPassword = false;

  googlePlacesOptions = {
    types: [],
    componentRestrictions: { country: 'CA' },
  };

  registrationStep = 1;

  working$: Observable<boolean>;
  msgError$: Observable<string>;

  constructor(
    private authService: AuthService,
    private broadcastService: BroadcastService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.working$ = this.broadcastService.working$;
    this.msgError$ = this.broadcastService.msgError$;

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }

    this.formGroup1 = new FormGroup({
      'email': new FormControl(this.registrationData.email, [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl(this.registrationData.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });

    this.formGroup2 = new FormGroup({
      'firstName': new FormControl(this.registrationData.firstName, [
        Validators.required,
      ]),
      'lastName': new FormControl(this.registrationData.lastName, [
        Validators.required,
      ]),
      'birthDate': new FormControl(this.registrationData.birthDate, [
        Validators.required,
      ]),
      'phoneNumber': new FormControl(this.registrationData.phoneNumber, [
        Validators.required,
      ]),
      'address': new FormControl(this.registrationData.address, [
        Validators.required,
      ]),
      'addressLine2': new FormControl(this.registrationData.addressLine2, [
        // Optional.
      ]),
      'terms': new FormControl('', [
        Validators.required,
      ]),
      'privacy': new FormControl('', [
        Validators.required,
      ]),
    });
  }

  onBack() {
    --this.registrationStep;
  }

  handleAddressChange(addr: any) {
    const addrComponents = addr.address_components;

    this.addressParts.addressLine1 = `${addrComponents[0].long_name} ${addrComponents[1].long_name}`;
    this.addressParts.city = addrComponents[2].long_name;
    this.addressParts.area = addrComponents[4].short_name;
    this.addressParts.country = addrComponents[5].short_name;
    this.addressParts.postalCode = addrComponents[6].long_name;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(step: number) {
    if (step === 1) {
      ++this.registrationStep;
    } else if (step === 2) {
      this.broadcastService.setWorking(true);

      let data = { ...this.formGroup1.value, ...this.formGroup2.value, ...this.addressParts };

      this.userService.create(data).subscribe((resp) => {
        this.broadcastService.setWorking(false);
        ++this.registrationStep;
      });
    }
  }
}
