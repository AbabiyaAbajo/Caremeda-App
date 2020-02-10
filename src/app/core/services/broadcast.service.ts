import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  private msgErrorSubject: BehaviorSubject<string>;
  public msgError$: Observable<string>;

  private workingSubject: BehaviorSubject<boolean>;
  public working$: Observable<boolean>;

  constructor() {
    this.reset();
  }

  setErrorMsg(msg: string) {
    this.msgErrorSubject.next(msg);
  }

  setWorking(isWorking: boolean) {
    this.workingSubject.next(isWorking);
  }

  reset() {
    this.msgErrorSubject = new BehaviorSubject<string>(null);
    this.msgError$ = this.msgErrorSubject.asObservable();

    this.workingSubject = new BehaviorSubject<boolean>(false);
    this.working$ = this.workingSubject.asObservable();
  }
}
