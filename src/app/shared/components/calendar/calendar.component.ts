import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { WorkOfferService } from '@core/services/work-offer.service';
import { UserService } from '@core/services/user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-calendar',
  styleUrls: ['./calendar.component.scss'],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit, AfterViewInit {
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  readonly colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };

  private eventsSubject = new BehaviorSubject<CalendarEvent[]>([]);
  events$ = this.eventsSubject.asObservable();

  activeDayIsOpen = true;
  
  constructor(private workOfferService: WorkOfferService, private userService: UserService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    // let calendarApi = this.calendar.getApi();
    // calendarApi.removeAllEvents();

    // if (this.userService.isServiceProvider()) {
    //   this.initBookedOffersAsServiceProvider(calendarApi);
    // }

    // this.initBookedOffersAsClient(calendarApi);

    this.initBookedOffersAsClient();

    // this.workOfferService.getBookedAsServiceProvider().subscribe((resp: any) => {
    //   console.log('as service provider');
    //   console.log(resp);
    // });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  // private initBookedOffersAsServiceProvider(calendarApi) {
  //   let events: CalendarEvent[] = [];

  //   this.workOfferService.getBookedAsServiceProvider().subscribe(data => {
  //     if (data === null) return;

  //     for (let workOffer of data) {
  //       events.push({
  //         id: workOffer.id,
  //         allDay: true,
  //         start: workOffer.startTimeUTC, // Automatically converst to user's local time
  //         end: workOffer.endTimeUTC, // Automatically converst to user's local time
  //         title: workOffer.title,
  //         color: { primary: '#61cbbe', secondary: '#ff0000' },
  //       });
  //     }

  //     calendarApi.addEventSource(events);
  //   });
  // }

  private initBookedOffersAsClient() {
    let events: CalendarEvent[] = [];

    this.workOfferService.getBookedAsClient().subscribe((resp: any) => {
      if (resp === null) {
        return;
      }

      for (let workOffer of resp.data.items) {
        events.push({
          id: workOffer.id,
          allDay: true,
          start: new Date(workOffer.startTimeUTC), // Automatically converts to user's local time
          end: new Date(workOffer.endTimeUTC), // Automatically converts to user's local time
          title: workOffer.title,
          color: { primary: '#000', secondary: '#555' },
        });
      }

      let eventsValue = this.eventsSubject.getValue();
      eventsValue.push(...events);

      this.eventsSubject.next(eventsValue);

      console.log(eventsValue);

      // this.events.push(...events);

      // console.log(this.events);
    });
  }
}
