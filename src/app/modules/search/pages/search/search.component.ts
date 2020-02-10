import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MapTypeStyle, MapTypeStyler } from '@agm/core/services/google-maps-types';
import { BehaviorSubject } from 'rxjs';

import { GeoLocationService } from '@core/services/geolocation.service';
import { CaregiverService } from '@core/services/caregiver.service';
import { WorkOfferService } from '@core/services/work-offer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  private readonly types = ['service-provider', 'work-offer'];

  private workOffersSubject = new BehaviorSubject<any>(null);
  workOffers$ = this.workOffersSubject.asObservable();

  private serviceProvidersSubject = new BehaviorSubject<any>(null);
  serviceProviders$ = this.serviceProvidersSubject.asObservable();

  position$ = null;
  mapStyles: MapTypeStyle[];

  type: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private caregiverService: CaregiverService,
    private geoLocationService: GeoLocationService,
    private router: Router,
    private workOfferService: WorkOfferService,
  ) { }

  ngOnInit() {
    this.position$ = this.geoLocationService.position$;

    this.activatedRoute.params.subscribe(params => {
      let type = params['type'];

      if (!this.types.includes(type)) {
        this.router.navigate(['/']);
        return;
      }

      // this.initMap();
      this.type = type;
      this.geoLocationService.setCurrentPosition();

      this.geoLocationService.position$.subscribe((data) => {
        if (!data) {
          return;
        }

        let body = {
          lat: data.coords.latitude,
          lng: data.coords.longitude,
          radius: 50,
        };

        if (type === 'work-offer') {
          this.workOfferService.search(body).subscribe((resp: any) => {
            this.workOffersSubject.next(resp.data.items);
          });
        } else {
          this.caregiverService.search(body).subscribe((resp: any) => {
            console.log(resp);
            this.serviceProvidersSubject.next(resp.data.items);
          });
        }
      });
    });
  }
}
