import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable, BehaviorSubject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BroadcastService } from '@core/services/broadcast.service';
import { CaregiverService } from '@core/services/caregiver.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  formGroup: FormGroup;

  settingsData = {
    about: null,
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    address: null,
    addressLine2: null,
  };

  private addressParts = {
    addressLine1: null,
    city: null,
    area: null,
    postalCode: null,
    country: null,
  };

  googlePlacesOptions = {
    types: [],
    componentRestrictions: { country: 'CA' },
  };

  isUpdated = false;

  user$: Observable<any>;
  working$: Observable<boolean>;
  msgError$: Observable<string>;

  constructor(
    private broadcastService: BroadcastService,
    private caregiverService: CaregiverService,
    private modalService: NgbModal,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user$ = this.userService.user$;
    this.working$ = this.broadcastService.working$;
    this.msgError$ = this.broadcastService.msgError$;

    this.user$.subscribe(data => {
      this.settingsData.about = data.about;
      this.settingsData.firstName = data.firstName;
      this.settingsData.lastName = data.lastName;
      this.settingsData.email = data.email;
      this.settingsData.phoneNumber = data.phone;
      this.settingsData.address = `${data.location.addressLine1}, ${data.location.city} ${data.location.area}`;
      this.settingsData.addressLine2 = data.location.addressLine2;
    });

    this.formGroup = new FormGroup({
      'about': new FormControl(this.settingsData.about, []),
      'email': new FormControl(this.settingsData.email, [
        Validators.required,
        Validators.email,
      ]),
      'firstName': new FormControl(this.settingsData.firstName, [
        Validators.required,
      ]),
      'lastName': new FormControl(this.settingsData.lastName, [
        Validators.required,
      ]),
      'phoneNumber': new FormControl(this.settingsData.phoneNumber, [
        Validators.required,
      ]),
      'address': new FormControl(this.settingsData.address, [
        Validators.required,
      ]),
      'addressLine2': new FormControl(this.settingsData.addressLine2, [
        // Optional.
      ]),
    });
  }

  handleAddressChange(addr: any) {
    const addrComponents = addr.address_components;

    for (let comp of addrComponents) {
      switch (comp.types[0]) {
        case 'street_number':
          this.addressParts.addressLine1 += comp.short_name;
          break;
        case 'route':
          this.addressParts.addressLine1 += ' ' + comp.short_name;
          break;
        case 'locality':
          this.addressParts.city = comp.short_name;
          break;
        case 'administrative_area_level_1':
          this.addressParts.area = comp.short_name;
          break;
        case 'country':
          this.addressParts.country = comp.short_name;
          break;
        case 'postal_code':
          this.addressParts.postalCode = comp.short_name;
          break;
        default:
          break;
      }
    }

    // this.addressParts.addressLine1 = `${addrComponents[0].long_name} ${addrComponents[1].long_name}`;
    // this.addressParts.city = addrComponents[2].long_name;
    // this.addressParts.area = addrComponents[4].short_name;
    // this.addressParts.country = addrComponents[5].short_name;
    // this.addressParts.postalCode = addrComponents[6].long_name;
  }

  onSubmit() {
    this.broadcastService.setWorking(true);

    let data = { ...this.formGroup.value, ...this.addressParts };

    this.userService.update(data).subscribe(resp => {
      this.broadcastService.setErrorMsg(null);
      this.broadcastService.setWorking(false);
      this.isUpdated = true;
      this.userService.reloadSelf();
    });
  }
}
