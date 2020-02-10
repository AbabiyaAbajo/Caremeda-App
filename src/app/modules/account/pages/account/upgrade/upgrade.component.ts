import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BroadcastService } from '@core/services/broadcast.service';
import { CaregiverService } from '@core/services/caregiver.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
})
export class UpgradeComponent implements OnInit {
  formGroup: FormGroup;

  caregiverData = {
    requestedWage: null,
    travelRadius: null,
    specialty: null,
    officialOccupation: null,
    cancellationPolicy: 1,
    personalIdNumber: null,
    bankTransitNumber: null,
    bankInstitutionNumber: null,
    bankAccountNumber: null,
  };

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
    if (this.userService.isServiceProvider()) {
      this.router.navigate(['/account/dashboard']);
    }

    this.working$ = this.broadcastService.working$;
    this.msgError$ = this.broadcastService.msgError$;

    this.formGroup = new FormGroup({
      'requestedWage': new FormControl(this.caregiverData.requestedWage, [
        Validators.required,
      ]),
      'travelRadius': new FormControl(this.caregiverData.travelRadius, [
        Validators.required,
      ]),
      'specialty': new FormControl(this.caregiverData.specialty, [
        Validators.required,
      ]),
      'officialOccupation': new FormControl(this.caregiverData.officialOccupation, [
        Validators.required,
      ]),
      'cancellationPolicy': new FormControl(this.caregiverData.cancellationPolicy),
      'personalIdNumber': new FormControl(this.caregiverData.personalIdNumber, [
        Validators.required,
      ]),
      'bankTransitNumber': new FormControl(this.caregiverData.bankTransitNumber, [
        Validators.required,
      ]),
      'bankInstitutionNumber': new FormControl(this.caregiverData.bankInstitutionNumber, [
        Validators.required,
      ]),
      'bankAccountNumber': new FormControl(this.caregiverData.bankAccountNumber, [
        Validators.required,
      ]),
    });
  }

  openModal(modal: any) {
    this.modalService.open(modal, { centered: true });
  }

  get isServiceProvider() {
    return this.userService.isServiceProvider();
  }

  onSubmit() {
    this.broadcastService.setWorking(true);

    let data = this.formGroup.value;

    this.caregiverService.create(data).subscribe(resp => {
      this.broadcastService.setErrorMsg(null);
      this.userService.reloadSelf();
    });
  }
}
