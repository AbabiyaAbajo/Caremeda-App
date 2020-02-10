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
export class WorkOfferService {
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Cancels a work offer.
   * @param id work offer ID
   */
  cancel(id: number) {
    const href = `${environment.api.workOffers}/${id}/cancel`;

    return this.http.patch(href, null);
  }

  /**
   * Creates a work offer.
   * @param data request body
   */
  create(data: any) {
    const href = `${environment.api.workOffers}`;

    return this.http.post(href, data);
  }

  /**
   * Deletes a work offer.
   * @param id work offer ID
   */
  delete(id: number) {
    const href = `${environment.api.workOffers}/${id}`;

    return this.http.delete(href);
  }

  /**
   * Gets booked work offers (as client).
   */
  getBookedAsClient() {
    const href = `${environment.api.workOffers}/client/booked`;

    return this.http.get(href);
  }

  /**
   * Gets booked work offers (as service provider).
   */
  getBookedAsServiceProvider() {
    const href = `${environment.api.workOffers}/service-provider/booked`;

    return this.http.get(href);
  }

  /**
   * Gets the penalty dollar amount if a work offer is cancelled.
   * @param id work offer ID
   */
  getCancellationPenaltyAmount(id: number) {
    const href = `${environment.api.workOffers}/${id}/cancel`;

    return this.http.get(href).pipe(
      // TODO
    );
  }

  /**
   * Gets the shifts for a given work offer.
   * @param id work offer ID
   */
  getShifts(id: number) {
    const href = `${environment.api.workOffers}/${id}/shifts`;

    return this.http.get(href).pipe(
      // TODO
    );
  }

  /**
   * Get work offer history (as client).
   */
  getHistoryAsClient() {
    const href = `${environment.api.workOffers}/client/history`;

    return this.http.get(href).pipe(
      // TODO
    );
  }

  /**
   * Gets work offer history (as service provider).
   */
  getHistoryAsServiceProvider() {
    const href = `${environment.api.workOffers}/service-provider/history`;

    return this.http.get(href).pipe(
      // TODO
    );
  }

  /**
   * Gets a work offer.
   * @param id work offer ID
   */
  get(id: number) {
    const href = `${environment.api.workOffers}/${id}`;

    return this.http.get(href);
  }

  /**
   * Gets work offers awaiting approval (as client).
   */
  getAwaitingApprovalAsClient() {
    const href = `${environment.api.workOffers}/client/awaiting-approval`;

    return this.http.get(href);
  }

  /**
   * Gets work offer awaiting approval (as service provider).
   */
  getAwaitingApprovalAsServiceProvider() {
    const href = `${environment.api.workOffers}/service-provider/awaiting-approval`;

    return this.http.get(href);
  }

  /**
   * Gets work offers that haven't been applied to yet by a service provider.
   */
  getAwaitingServiceProvider() {
    const href = `${environment.api.workOffers}/client/awaiting-service-provider`;

    return this.http.get(href).pipe(
      // TODO
    );
  }

  // TODO Change to GET request with URL params
  /**
   * Searches for work offers.
   * @param query request body
   */
  search(data: any) {
    const href = `${environment.api.workOffers}/search`;

    return this.http.post(href, data).pipe(
      // TODO
    );
  }
}
