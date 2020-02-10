import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit {
  private notificationsSubject = new BehaviorSubject<any>(null);
  notifications$ = this.notificationsSubject.asObservable();

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getNotifications().subscribe((resp: any) => {
      console.log(resp.data.items);
      this.notificationsSubject.next(resp.data.items);
    });
  }
}
