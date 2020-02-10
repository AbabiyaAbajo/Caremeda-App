import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import { BehaviorSubject, Observable } from 'rxjs';

import { BroadcastService } from '@core/services/broadcast.service';
import { CareTypeService } from '@core/services/care-type.service';
import { UserService } from '@core/services/user.service';
import { WorkOfferService } from '@core/services/work-offer.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {
  private careTypesSubject = new BehaviorSubject<any>(null);
  careTypes$ = this.careTypesSubject.asObservable();

  hasCreditCard: boolean = null;

  formGroup: FormGroup;

  googlePlacesOptions = {
    types: [],
    componentRestrictions: { country: 'CA' },
  };

  working$: Observable<boolean>;
  msgError$: Observable<string>;

  private workOfferData: any = {
    title: null,
    description: null,
    careType: 'Child care',
    responsibilities: null,
    wardDetails: null,
    rules: null,
    meetingLocation: null,
    startTimeLocal: null,
    endTimeLocal: null,
    wage: null,
    address: null,
    isContinuous: 1,
  };

  constructor(
    private broadcastService: BroadcastService,
    private careTypeService: CareTypeService,
    private router: Router,
    private userService: UserService,
    private workOfferService: WorkOfferService,
  ) { }

  ngOnInit() {
    this.working$ = this.broadcastService.working$;
    this.msgError$ = this.broadcastService.msgError$;

    this.userService.getCardSelf().subscribe((resp: any) => {
      if (resp.data.items.length) {
        this.hasCreditCard = true;

        this.careTypeService.getAll().subscribe((resp: any) => {
          this.careTypesSubject.next(resp.data.items);
        });
      } else {
        this.hasCreditCard = false;
      }
    })

    this.formGroup = new FormGroup({
      'title': new FormControl(this.workOfferData.title, [
        Validators.required,
      ]),
      'description': new FormControl(this.workOfferData.description, [
        Validators.required,
      ]),
      'careType': new FormControl(this.workOfferData.careType, []),
      'responsibilities': new FormControl(this.workOfferData.responsibilities, [
        Validators.required,
      ]),
      'wardDetails': new FormControl(this.workOfferData.wardDetails, [
        Validators.required,
      ]),
      'rules': new FormControl(this.workOfferData.rules, [
        Validators.required,
      ]),
      'meetingLocation': new FormControl(this.workOfferData.meetingLocation, [
        Validators.required,
      ]),
      'address': new FormControl(this.workOfferData.address, [
        Validators.required,
      ]),
      'startTimeLocal': new FormControl(this.workOfferData.startTimeLocal, [
        Validators.required,
      ]),
      'endTimeLocal': new FormControl(this.workOfferData.endTimeLocal, [
        Validators.required,
      ]),
      'wage': new FormControl(this.workOfferData.wage, [
        Validators.required,
      ]),
      'isContinuous': new FormControl(this.workOfferData.isContinuous, []),
    });
  }

  handleMeetingLocationChange(addr: any) {
    this.formGroup.get('meetingLocation').setValue(addr.formatted_address);
  }

  handleAddressChange(addr: any) {
    this.formGroup.get('address').setValue(addr.formatted_address);
  }

  onSubmit() {
    this.broadcastService.setWorking(true);

    let data = this.formGroup.value;

    this.workOfferService.create(data).subscribe((resp: any) => {
      this.router.navigate([`/work-offer/${resp.data.id}`]);
      this.broadcastService.setWorking(false);
    });
  }
}
