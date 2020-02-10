import {
  Component,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

import { NgForm } from '@angular/forms';

import { BroadcastService } from '@core/services/broadcast.service';
import { UserService } from '@core/services/user.service';
import { Observable, BehaviorSubject } from 'rxjs';

declare const Stripe;

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
})
export class BillingComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('cardInfo', {static: true}) cardInfo: ElementRef;

  stripe = Stripe('pk_test_zvdI4ud9WoMrWi404o4y0y1G');
  elements = this.stripe.elements();

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  isUpdated = false;

  working$: Observable<boolean>;
  msgError$: Observable<string>;

  private cardSubject = new BehaviorSubject<any>(null);
  card$ = this.cardSubject.asObservable();

  constructor(
    private broadcastService: BroadcastService,
    private cd: ChangeDetectorRef, 
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.working$ = this.broadcastService.working$;
    this.msgError$ = this.broadcastService.msgError$;

    this.userService.getCardSelf().subscribe((resp: any) => {
      this.cardSubject.next(resp.data.items);
    });
  }

  ngAfterViewInit() {
    this.card = this.elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    this.broadcastService.setWorking(true);
    
    const { token, err } = await this.stripe.createToken(this.card);

    if (err) {
      this.broadcastService.setWorking(false);
      return;
    }
    
    let data = { token: token };

    this.userService.updateCreditCard(data).subscribe(resp => {
      this.broadcastService.setErrorMsg(null);
      this.broadcastService.setWorking(false);
      this.isUpdated = true;
      this.userService.reloadSelf();
      this.userService.getCardSelf().subscribe((resp: any) => {
        this.cardSubject.next(resp.data);
      });
    });
  }

  removeCard() {
    // TODO when removing card, ensure there's no work offers associated with it.
    // If there is, cancel them and warn user about cancellation policy.
    if(confirm('Are you sure you want to remove your card?')) {
      this.userService.deleteCard().subscribe(resp => {
        this.cardSubject.next(null);
      });
    }
  }
}