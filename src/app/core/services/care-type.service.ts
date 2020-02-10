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
export class CareTypeService {
  constructor(private http: HttpClient) { }

  /**
   * Gets all the care types.
   * @returns care types
   */
  getAll() {
    const href = `${environment.api.careType}`;

    // return this.http.get(href).pipe(
    //   map((data: any) => data.data.items.map(item => this.careTypeAdapter.adapt(item))),
    //   tap((data: any) => {
    //     // this.careTypesSubject.next(data);
    //   })
    // );

    return this.http.get(href);
  }
}
