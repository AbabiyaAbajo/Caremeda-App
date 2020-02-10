import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgxMaskModule } from 'ngx-mask'
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { SharedModule } from '@shared/shared.module';

import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './pages/account/dashboard/dashboard.component';
import { AccountRoutingModule } from './account.routing';
import { UpgradeComponent } from './pages/account/upgrade/upgrade.component';
import { SettingsComponent } from './pages/account/settings/settings.component';
import { SecurityComponent } from './pages/account/security/security.component';
import { BillingComponent } from './pages/account/billing/billing.component';
import { WorkOffersComponent } from './pages/account/work-offers/work-offers.component';
import { InboxComponent } from './pages/account/inbox/inbox.component';
import { NotificationsComponent } from './pages/account/notifications/notifications.component';
import { ShiftsComponent } from './pages/account/shifts/shifts.component';

@NgModule({
  declarations: [
    AccountComponent,
    DashboardComponent,
    UpgradeComponent,
    SettingsComponent,
    SecurityComponent,
    BillingComponent,
    WorkOffersComponent,
    InboxComponent,
    NotificationsComponent,
    ShiftsComponent,
  ],
  imports: [
    AccountRoutingModule,
    FormsModule,
    CommonModule,
    GooglePlaceModule,
    NgBootstrapFormValidationModule,
    NgxMaskModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class AccountModule { }
