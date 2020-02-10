import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

import { environment } from '@environments/environment';
import { appSettings } from '@configs/settings.config';

import { UserService } from '@core/services/user.service';

@Injectable()
export class AuthService {
  // private authSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  // public readonly auth$ = this.authSubject.asObservable();

  constructor(
    private http: HttpClient, 
    private userService: UserService,
  ) { }

  /**
   * Logs in a user.
   * @param data request body
   */
  login(data: any) {
    const href = `${environment.api.auth}`;
    const storage = data.remember ? localStorage : sessionStorage;

    return this.http.post(href, data).pipe(
      tap(
        (resp: any) => {
          if (resp.data.token) {
            storage.setItem(appSettings.authKeys.auth, resp.data.token);
            this.userService.user = resp.data.user;
          }
        }
      ),
    );
  }

  /**
   * Logs out a user.
   */
  logout(): Observable<boolean> {
    sessionStorage.removeItem(appSettings.authKeys.auth);
    localStorage.removeItem(appSettings.authKeys.auth);

    // this.authSubject.next(false);

    return observableOf(true);
  }

  /**
   * Checks if a user is logged in.
   * @returns true if logged in, false otherwise
   */
  isLoggedIn() {
    if (localStorage.getItem(appSettings.authKeys.auth) || sessionStorage.getItem(appSettings.authKeys.auth)) {
      return true;
    }

    return false;
  }

  /**
   * Verifies a user's email.
   * @param data request body
   */
  verify(data: any) {
    const href = `${environment.api.auth}/verification`;

    return this.http.patch(href, data);
  }

  recover(data: any) {
    const href = `${environment.api.auth}/recover`;

    return this.http.patch(href, data);
  }

  /**
   * Gets the auth token.
   * @returns the auth token
   */
  getToken() {
    const token = sessionStorage.getItem(appSettings.authKeys.auth) || localStorage.getItem(appSettings.authKeys.auth);

    return token;
  }
}
