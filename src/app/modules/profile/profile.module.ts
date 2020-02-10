import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgxMaskModule } from 'ngx-mask'
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { SharedModule } from '@shared/shared.module';

import { ProfileComponent } from './pages/profile/profile.component';

import { ProfileRoutingModule } from './profile.routing';

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    ProfileRoutingModule,
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
export class ProfileModule { }
