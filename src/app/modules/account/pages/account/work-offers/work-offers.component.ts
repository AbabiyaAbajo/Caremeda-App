import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { BroadcastService } from '@core/services/broadcast.service';
import { UserService } from '@core/services/user.service';
import { WorkMessageService } from '@core/services/work-message.service';
import { WorkOfferService } from '@core/services/work-offer.service';

@Component({
  selector: 'app-work-offers',
  templateUrl: './work-offers.component.html',
})
export class WorkOffersComponent implements OnInit {
  private workOffersClientSubject = new BehaviorSubject<any>(null);
  workOffersClient$ = this.workOffersClientSubject.asObservable();

  private workOffersServiceProviderSubject = new BehaviorSubject<any>(null);
  workOffersServiceProvider$ = this.workOffersServiceProviderSubject.asObservable();

  private showAsServiceProviderSubject = new BehaviorSubject<boolean>(null);
  showAsServiceProvider$ = this.showAsServiceProviderSubject.asObservable();

  working$: Observable<boolean>;

  activeTab = 1;
  messageSuccess = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private broadcastService: BroadcastService,
    private userService: UserService,
    private workMessageService: WorkMessageService,
    private workOfferService: WorkOfferService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.working$ = this.broadcastService.working$;

    this.setTab(1);
  }

  setTab(num: number) {
    switch (num) {
      case 1:
        this.fetchAwaitingServiceProvider();
        this.activeTab = num;
        break;
      case 2:
        this.fetchAwaitingApproval();
        this.activeTab = num;
        break;
      default:
        break;
    }
  }

  onSortChange(value: string) {
    let workOffersClient = this.workOffersClientSubject.getValue();
    let workOffersServiceProvider = this.workOffersServiceProviderSubject.getValue();

    let workOffersClientSorted = this.sort(workOffersClient, value);
    this.workOffersClientSubject.next(workOffersClientSorted);

    let workOffersServiceProviderSorted = this.sort(workOffersServiceProvider, value);
    this.workOffersServiceProviderSubject.next(workOffersServiceProviderSorted);
  }

  get isServiceProvider() {
    return this.userService.isServiceProvider();
  }

  acceptWorkMessage(id: number, name: string, title: string) {
    this.broadcastService.setWorking(true);

    this.workMessageService.accept(id).subscribe((resp: any) => {
      this.broadcastService.setWorking(false);
      this.messageSuccess = `You have accepted ${name} for "${title}."`;
      this.fetchAwaitingApproval();
    });
  }

  private fetchAwaitingServiceProvider() {
    this.workOffersClientSubject.next(null);
    this.showAsServiceProviderSubject.next(false);

    this.workOfferService.getAwaitingServiceProvider().subscribe((resp: any) => {
      this.workOffersClientSubject.next(resp.data.items);
    });
  }

  private fetchAwaitingApproval() {
    this.workOffersClientSubject.next(null);
    this.workOffersServiceProviderSubject.next(null);
    this.showAsServiceProviderSubject.next(true);
 
    this.workOfferService.getAwaitingApprovalAsClient().subscribe((resp: any) => {
      this.workOffersClientSubject.next(resp.data.items);
    });

    if (this.isServiceProvider) {
      this.workOfferService.getAwaitingApprovalAsServiceProvider().subscribe((resp: any) => {
        this.workOffersServiceProviderSubject.next(resp.data.items);
      });
    }
  }

  private sort(workOffers, value) {
    switch (value) {
      case 'date-added-oldest':
        workOffers.sort((a, b) => {
          if (Date.parse(a.startTimeLocal) < Date.parse(b.startTimeLocal)) {
            return -1;
          } else if (Date.parse(a.startTimeLocal) > Date.parse(b.startTimeLocal)) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      case 'date-added-newest':
        workOffers.sort((a, b) => {
          if (Date.parse(a.startTimeLocal) < Date.parse(b.startTimeLocal)) {
            return 1;
          } else if (Date.parse(a.startTimeLocal) > Date.parse(b.startTimeLocal)) {
            return -1;
          } else {
            return 0;
          }
        });
        break;
      case 'date-start-latest':
        workOffers.sort((a, b) => {
          if (Date.parse(a.startTimeLocal) < Date.parse(b.startTimeLocal)) {
            return 1;
          } else if (Date.parse(a.startTimeLocal) > Date.parse(b.startTimeLocal)) {
            return -1;
          } else {
            return 0;
          }
        });
        break;
      case 'date-start-soonest':
        workOffers.sort((a, b) => {
          if (Date.parse(a.startTimeLocal) < Date.parse(b.startTimeLocal)) {
            return -1;
          } else if (Date.parse(a.startTimeLocal) > Date.parse(b.startTimeLocal)) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      default:
        break;
    }

    return workOffers;
  }
}
