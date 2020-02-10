import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { MapTypeStyle, MapTypeStyler } from '@agm/core/services/google-maps-types';

import { BroadcastService } from '@core/services/broadcast.service';
import { UserService } from '@core/services/user.service';
import { WorkMessageService } from '@core/services/work-message.service';
import { WorkOfferService } from '@core/services/work-offer.service';

@Component({
  selector: 'app-work-offer-view',
  templateUrl: './view.component.html',
})
export class WorkOfferViewComponent implements OnInit {
  private workOfferSubject = new BehaviorSubject<any>(null);
  workOffer$ = this.workOfferSubject.asObservable();

  private userOfferingSubject = new BehaviorSubject<any>(null);
  userOffering$ = this.userOfferingSubject.asObservable();

  private didApplySubject = new BehaviorSubject<boolean>(false);
  didApply$ = this.didApplySubject.asObservable();

  mapStyles: MapTypeStyle[];

  user$: Observable<any>;
  working$: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private broadcastService: BroadcastService,
    private userService: UserService,
    private workMessageService: WorkMessageService,
    private workOfferService: WorkOfferService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user$ = this.userService.user$;
    this.working$ = this.broadcastService.working$;
    
    let id = this.activatedRoute.snapshot.params.id;

    // TODO Redirect home if work offer is already accepted.
    if (!parseInt(id)) {
      this.router.navigate(['/']);
    }

    this.workOfferService.get(id).subscribe((resp: any) => {
      this.workOfferSubject.next(resp.data);

      let idUserOffering = resp.data.idUserOffering;

      this.userService.get(idUserOffering).subscribe((resp: any) => {
        this.userOfferingSubject.next(resp.data);
      });
    });

    this.workOfferService.getAwaitingApprovalAsServiceProvider().subscribe((resp: any) => {
      let items = resp.data.items;

      // TODO Create API endpoint to check if user applied to work offer to avoid long loops.
      for (let item of items) {
        if (item.id === parseInt(id)) {
          this.didApplySubject.next(true);
          return;
        }
      }
    });

    this.initMap();
  }

  apply() {
    this.broadcastService.setWorking(true);

    let id = this.activatedRoute.snapshot.params.id;
    let data = { idWorkOffer: id };

    this.workMessageService.create(data).subscribe((resp: any) => {
      this.didApplySubject.next(true);
      this.broadcastService.setWorking(false);
    });
  }

  private initMap() {
    this.mapStyles = [
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "landscape.natural.terrain",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#f5b333"
          },
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.local",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#7dd9d0"
          }
        ]
      },
    ];
  }
}
