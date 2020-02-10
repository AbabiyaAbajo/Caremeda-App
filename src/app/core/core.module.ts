import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxMaskModule } from 'ngx-mask'

import { EnsureModuleLoadedOnceGuard } from '@core/module-loaded-once.guard';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '@shared/shared.module';

import { AccountModule } from '@app/modules/account/account.module';
import { AuthModule } from '@modules/auth/auth.module';
import { HomeModule } from '@app/modules/home/home.module';
import { ProfileModule } from '@app/modules/profile/profile.module';
import { SearchModule } from '@app/modules/search/search.module';
import { WorkOfferModule } from '@app/modules/work-offer/work-offer.module';

import { HeaderComponent } from '@core/components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastComponent } from '@core/components/toast/toast.component';

import { AuthService } from '@core/services/auth.service';
import { BroadcastService } from '@core/services/broadcast.service';
import { CareTypeService } from '@core/services/care-type.service';
import { GeoLocationService } from '@core/services/geolocation.service';
import { NotificationService } from '@core/services/notification.service';
import { ShiftService } from '@core/services/shift.service';
import { ThreadService } from '@core/services/thread.service';
import { TitleService } from '@core/services/title.service';
import { ToastService } from '@core/services/toast.service';
import { UserService } from '@core/services/user.service';
import { WorkMessageService } from '@core/services/work-message.service';
import { WorkOfferService } from '@core/services/work-offer.service';

import { ClientAuthGuard } from '@core/guards/client-auth.guard';

import { ErrorHandlerInterceptor } from '@core/interceptors/error-handler.interceptor';
import { ApiPrefixInterceptor } from '@core/interceptors/api-prefix.interceptor';
import { HttpTokenInterceptor } from '@core/interceptors/http-token.interceptor';

@NgModule({
  imports: [
    AccountModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQL4w7oQ6y58esuR_U4nz5YPGz9_3ec54'
    }),
    AuthModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CommonModule,
    HomeModule,
    ProfileModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    NgbDropdownModule,
    NgxMaskModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    ReactiveFormsModule,
    SearchModule,
    SharedModule,
    WorkOfferModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    BroadcastService,
    CareTypeService,
    ClientAuthGuard,
    GeoLocationService,
    NotificationService,
    ShiftService,
    ThreadService,
    ToastService,
    WorkMessageService,
    WorkOfferService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    TitleService,
    UserService,
  ],
  declarations: [
    HeaderComponent,
    ToastComponent,
    FooterComponent,
  ],
  entryComponents: [
    ToastComponent,
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure that CoreModule is only loaded into AppModule
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once).
  constructor(@Optional() @SkipSelf() parentModule: CoreModule, titleService: TitleService) {
    super(parentModule);
    titleService.init();
  }
}
