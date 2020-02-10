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
export class WorkMessageService {
  constructor(
    private http: HttpClient,
  ) { }
  
  /**
   * Accepts a work message.
   * @param id work message ID
   */
  accept(id: number) {
    const href = `${environment.api.workMessages}/${id}/accept`;

    return this.http.patch(href, null);
  }

  /**
   * Creates a work message.
   * @param data request body
   */
  create(data: any) {
    const href = `${environment.api.workMessages}`;

    return this.http.post(href, data);
  }

  /**
   * Deletes a work message.
   * @param id work message ID
   */
  delete(id: number) {
    const href = `${environment.api.workMessages}/${id}`;

    return this.http.delete(href);
  }
}
