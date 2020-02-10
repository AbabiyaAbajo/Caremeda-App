import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlatpickrModule } from 'angularx-flatpickr';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxMaskModule } from 'ngx-mask'

import { SharedModule } from '@shared/shared.module';

import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth.routing';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';

// import { SharedModule } from '@app/shared';
// import { ProjectItemComponent } from './pages/project-item/project-item.component';
// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    // ProjectItemComponent,
    // ProjectDetailsComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    GooglePlaceModule,
    FlatpickrModule.forRoot(),
    FormsModule,
    NgBootstrapFormValidationModule,
    NgxMaskModule,
    ReactiveFormsModule,
    SharedModule,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory
    // }),
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class AuthModule { }
