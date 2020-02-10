import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable, BehaviorSubject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BroadcastService } from '@core/services/broadcast.service';
import { CaregiverService } from '@core/services/caregiver.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
})
export class SecurityComponent implements OnInit {
  formGroup: FormGroup;

  securityData = {
    currentPassword: null,
    newPassword: null,
  };

  showPasswordCurrent = false;
  showPasswordConfirm = false;

  isUpdated = false;

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
    this.working$ = this.broadcastService.working$;
    this.msgError$ = this.broadcastService.msgError$;

    this.formGroup = new FormGroup({
      'currentPassword': new FormControl(this.securityData.currentPassword, [
        Validators.required,
      ]),
      'newPassword': new FormControl(this.securityData.newPassword, [
        Validators.required,
      ]),
    });
  }

  togglePasswordCurrentVisibility() {
    this.showPasswordCurrent = !this.showPasswordCurrent;
  }

  togglePasswordConfirmVisibility() {
    this.showPasswordConfirm = !this.showPasswordConfirm;
  }

  onSubmit() {
    this.broadcastService.setWorking(true);

    let data = this.formGroup.value;

    this.userService.updateCredentials(data).subscribe(resp => {
      this.broadcastService.setErrorMsg(null);
      this.broadcastService.setWorking(false);
      this.isUpdated = true;
      this.userService.reloadSelf();
    });
  }
}
