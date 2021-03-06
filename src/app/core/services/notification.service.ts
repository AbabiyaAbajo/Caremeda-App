import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient) { }

  /**
   * Gets all notifications.
   */
  getNotifications() {
    const href = `${environment.api.notifications}`;

    return this.http.get(href);
  }
}