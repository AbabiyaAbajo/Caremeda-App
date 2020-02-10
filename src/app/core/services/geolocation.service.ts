import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class GeoLocationService {
  // coordinates: any;

  private positionSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly position$ = this.positionSubject.asObservable();

  constructor() { }

  /**
   * Sets the current geo position.
   */
  public setCurrentPosition() {
    navigator.geolocation.watchPosition((pos: Position) => {
      this.positionSubject.next(pos);
    }),
      () => {
        console.log('Position is not available');
      },
      {
        enableHighAccuracy: true
      };
  }
}
