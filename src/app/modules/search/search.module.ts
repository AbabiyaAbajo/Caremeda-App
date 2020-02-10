import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '@shared/shared.module';

import { SearchComponent } from './pages/search/search.component';
import { SearchRoutingModule } from './search.routing';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    AgmCoreModule,
    SharedModule,
    CommonModule,
    SearchRoutingModule,
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class SearchModule { }
