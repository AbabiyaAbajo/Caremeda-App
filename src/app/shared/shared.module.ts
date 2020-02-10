import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSmartModalModule } from 'ngx-smart-modal';

// import { FullCalendarModule } from '@fullcalendar/angular';
// import { DpDatePickerModule } from 'ng2-date-picker';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { ModalComponent } from '@shared/components/modal/modal.component';
import { CalendarComponent } from '@shared/components/calendar/calendar.component';
import { SelectPlaceholderDirective } from '@shared/directives/select-placeholder/select-placeholder.directive';

@NgModule({
  imports: [
    CalendarModule,
    CommonModule,
    // DpDatePickerModule,
    // FullCalendarModule,
    NgxSmartModalModule,
  ],
  declarations: [
    CalendarComponent,
    ModalComponent,
    SelectPlaceholderDirective,
  ],
  entryComponents: [],
  exports: [
    CalendarComponent,
    // DpDatePickerModule,
    // FullCalendarModule,
    ModalComponent,
    SelectPlaceholderDirective,
  ],
})
export class SharedModule { }
