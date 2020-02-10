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
export class ThreadService {
  constructor(
    private http: HttpClient,
  ) { }
  
  /**
   * Creates a new message.
   * @param id thread ID
   * @param data request body
   */
  createMessage(id: number, data: any) {
    const href = `${environment.api.threads}/${id}`;

    return this.http.post(href, data);
  }
  
  /**
   * Creates a new thread.
   * @param data request body
   */
  create(data: any) {
    const href = `${environment.api.threads}`;

    return this.http.post(href, data);
  }

  /**
   * Gets messages for a given thread.
   * @param id thread ID
   */
  getMessages(id: number) {
    const href = `${environment.api.threads}/${id}`;

    return this.http.get(href).pipe(
      // TODO
    );
  }

  /**
   * Gets all threads.
   */
  getAll() {
    const href = `${environment.api.threads}`;

    return this.http.get(href);
  }
}
