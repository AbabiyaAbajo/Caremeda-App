import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { FlatpickrModule } from 'angularx-flatpickr';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { NgxMaskModule } from 'ngx-mask'

import { SharedModule } from '@shared/shared.module';

// import { SearchComponent } from './pages/search/search.component';
import { WorkOfferRoutingModule } from './work-offer.routing';
import { WorkOfferViewComponent } from './pages/view/view.component';
import { NewComponent } from './pages/new/new.component';

@NgModule({
  declarations: [
    // SearchComponent,
    WorkOfferViewComponent,
    NewComponent,
  ],
  imports: [
    AgmCoreModule,
    FlatpickrModule,
    FormsModule,
    GooglePlaceModule,
    NgxMaskModule,
    SharedModule,
    CommonModule,
    NgBootstrapFormValidationModule,
    ReactiveFormsModule,
    WorkOfferRoutingModule,
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class WorkOfferModule { }
