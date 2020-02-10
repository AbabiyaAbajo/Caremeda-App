import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { BroadcastService } from '@core/services/broadcast.service';
import { ShiftService } from '@core/services/shift.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
})
export class ShiftsComponent implements OnInit {
  private shiftsSubject = new BehaviorSubject<any>(null);
  shifts$ = this.shiftsSubject.asObservable();

  working$: Observable<boolean>;

  activeTab = 1;
  messageSuccess = '';

  constructor(
    private broadcastService: BroadcastService,
    private shiftService: ShiftService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.working$ = this.broadcastService.working$;

    this.setTab(1);
  }

  setTab(num: number) {
    switch (num) {
      case 1:
        this.fetchUpcoming();
        this.activeTab = num;
        break;
      case 2:
        this.fetchAwaitingConfirmation();
        this.activeTab = num;
        break;
      case 3:
        this.fetchComplete();
        this.activeTab = num;
        break;
      default:
        break;
    }
  }

  clockIn(id: number, index: number) {
    this.broadcastService.setWorking(true);

    this.shiftService.clockIn(id).subscribe((resp: any) => {
      this.messageSuccess = 'Great! You’re clocked in. Don’t forget to clock out when you’re finished your shift.';
      this.broadcastService.setWorking(false);

      let shifts = this.shiftsSubject.getValue();
      shifts[index].isClockedIn = true;

      this.shiftsSubject.next(shifts);
    });
  }

  clockOut(id: number) {

  }

  private fetchUpcoming() {
    this.shiftsSubject.next(null);
    
    this.userService.getShiftsUpcoming().subscribe((resp: any) => {
      this.shiftsSubject.next(resp.data.items);
    });
  }

  private fetchAwaitingConfirmation() {
    this.shiftsSubject.next(null);

    this.userService.getShiftsAwaitingConfirmation().subscribe((resp: any) => {
      this.shiftsSubject.next(resp.data.items);
    });
  }

  private fetchComplete() {
    this.shiftsSubject.next(null);

    this.userService.getShiftsComplete().subscribe((resp: any) => {
      this.shiftsSubject.next(resp.data.items);
    });
  }
}
