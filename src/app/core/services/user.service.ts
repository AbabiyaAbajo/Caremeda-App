import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, first, map, tap, debounce, distinctUntilChanged } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

import { environment } from '@environments/environment';
import { appSettings } from '@configs/settings.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly user$ = this.userSubject.asObservable();

  // private user: User;

  constructor(private http: HttpClient) { }

  set user(user: any) {
    this.userSubject.next(user);
  }

  /**
   * Reports a user.
   * @param id user ID
   */
  report(id: number) {
    const href = `${environment.api.users}/${id}/reports`;

    return this.http.post(href, null);
  }

  /**
   * Creates a review for a given user.
   * @param id user ID
   * @param data request body
   */
  createReview(id: number, data: any) {
    const href = `${environment.api.users}/${id}/reviews`;

    return this.http.post(href, data);
  }

  /**
   * Creates a user.
   * @param registrationData request body
   */
  create(data: any) {
    const href = `${environment.api.users}`;

    return this.http.post(href, data).pipe(
      tap(
        (data: any) => {
          // console.log(data);
        }
      ),
    );
  }

  /**
   * Gets all unread notifications.
   */
  getNotifiationsUnread() {
    const href = `${environment.api.users}/me/notifications/unread`;

    return this.http.get(href).pipe(
      tap(
        (data: any) => {
          // console.log(data);
        }
      ),
    );
  }

  /**
   * Gets all notifications.
   */
  getNotifications() {
    const href = `${environment.api.users}/me/notifications`;

    return this.http.get(href);
  }

  /**
   * Gets reviews for a given user.
   * @param id user ID
   */
  getReviews(id: number) {
    const href = `${environment.api.users}/${id}/reviews`;

    return this.http.get(href).pipe(
      tap(
        (data: any) => {
          // console.log(data);
        }
      ),
    );
  }

  setSelf(data: any) {
    this.userSubject.next(data);
  }

  getCardSelf() {
    const href = `${environment.api.users}/me/card`;

    return this.http.get(href);
  }

  deleteCard() {
    const href = `${environment.api.users}/me/card`;
    
    return this.http.delete(href);
  }

  /**
   * Gets self.
   * @param refresh should fetch user from server?
   */
  getSelf(refresh: boolean = false) {
    const href = `${environment.api.users}/me`;

    return this.http.get(href).pipe(
      // map((data: any) => this.userAdapter.adapt(data.data)),
      tap((data: any) => {
        // this.user = data;
        this.userSubject.next(data.data);
        // TODO
      })
    );
  }

  /**
   * Gets self upcoming shifts.
   */
  getShiftsUpcoming() {
    const href = `${environment.api.users}/me/shifts/upcoming`;

    return this.http.get(href);
  }

  /**
   * Gets self shifts awaiting confirmation.
   */
  getShiftsAwaitingConfirmation() {
    const href = `${environment.api.users}/me/shifts/awaiting-confirmation`;

    return this.http.get(href);
  }

  /**
   * Gets self completed shifts.
   */
  getShiftsComplete() {
    const href = `${environment.api.users}/me/shifts/complete`;

    return this.http.get(href);
  }

  // /**
  //  * Gets the shifts for a given user.
  //  * @param id user ID
  //  */
  // getShifts(id: number) {
  //   const href = `${environment.api.users}/${id}/shifts`;

  //   return this.http.get(href).pipe(
  //     // map((data: any) => this.userAdapter.adapt(data.data)),
  //     tap((data: any) => {
  //       // this.user = data;
  //       // this.userDataSubject.next(data);
  //       // TODO
  //     })
  //   );
  // }

  /**
   * Gets a user.
   * @param id user ID
   */
  get(id: number) {
    const href = `${environment.api.users}/${id}`;

    return this.http.get(href);
  }

  /**
   * Resets a user password if forgotten.
   * Pass the user's email to generate a reset token.
   * Pass the user's email, reset token and new password to reset it.
   * @param data request body
   */
  resetPassword(data: any) {
    const href = `${environment.api.users}/password`;

    return this.http.patch(href, data);
  }

  /**
   * Updates the user's credentials.
   * @param data updated credentials data (email and password)
   */
  updateCredentials(data: any) {
    const href = `${environment.api.users}/me/credentials`;

    return this.http.patch(href, data);
  }

  /**
   * Updates the user's credit card.
   * @param data request body
   */
  updateCreditCard(data: any) {
    const href = `${environment.api.users}/me/card`;

    return this.http.put(href, data);
  }

  /**
   * Updates a user.
   * @param data request body
   */
  update(data: any) {
    const href = `${environment.api.users}/me`;

    return this.http.patch(href, data);
  }

  /**
   * Destroys the logged in user.
   */
  destroySelf() {
    // this.userDataSubject.next(null);
    // this.user = null;
  }

  /**
   * Checks if logged in user is a service provider.
   */
  isServiceProvider() {
    if (!this.userSubject.getValue()) {
      return null;
    }

    return this.userSubject.getValue().isCaregiver;
  }

  reloadSelf() {
    const href = `${environment.api.users}/me`;

    this.http.get(href).pipe(
      first(),
      // map((data: any) => this.userAdapter.adapt(data.data)),
      tap((data: any) => {
        // this.user = data;
        this.userSubject.next(data);
        // TODO
      })
    ).subscribe();
  }
}
