import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap, debounce, distinctUntilChanged } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

import { environment } from '@environments/environment';
import { appSettings } from '@configs/settings.config';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Clocks into a shift.
   * @param id shift ID
   */
  clockIn(id: number) {
    const href = `${environment.api.shifts}/${id}/clock-in`;

    return this.http.patch(href, null);
  }

  /**
   * Clocks out of a shift.
   * @param id shift ID
   */
  clockOut(id: number) {
    const href = `${environment.api.shifts}/${id}/clock-out`;

    return this.http.patch(href, null);
  }

  /**
   * Confirms the completion of a shift.
   * @param id shift ID
   */
  confirm(id: number) {
    const href = `${environment.api.shifts}/${id}/confirm`;

    return this.http.patch(href, null);
  }

  /**
   * Gets a shift.
   * @param  id shift ID
   */
  get(id: number) {
    const href = `${environment.api.shifts}/${id}`;

    return this.http.get(href);
  }
}
