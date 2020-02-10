import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap, debounce, distinctUntilChanged } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaregiverService {
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Creates a new caregiver.
   * @param data request body
   */
  create(data: any) {
    const href = `${environment.api.caregivers}`;

    return this.http.post<any>(href, data);
  }

  /**
   * Gets a caregiver.
   * @param id caregiver ID
   */
  get(id: number) {
    const href = `${environment.api.caregivers}/${id}`;

    return this.http.get(href);
  }

  // TODO Change to GET request with URL params
  /**
   * Searches for caregivers.
   * @param data request body
   */
  search(data: any) {
    const href = `${environment.api.caregivers}/search`;

    return this.http.post(href, data);
  }

  /**
   * Updates a caregiver's availability.
   * @param data request body
   */
  updateAvailability(data: any) {
    const href = `${environment.api.caregivers}/availability`;

    return this.http.post(href, data).pipe(
      // TODO
    );
  }
}
