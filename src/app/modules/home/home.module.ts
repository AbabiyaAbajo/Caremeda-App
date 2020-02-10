import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home.routing';

// import { SharedModule } from '@app/shared';
// import { ProjectItemComponent } from './pages/project-item/project-item.component';
// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    // ProjectItemComponent,
    // ProjectDetailsComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class HomeModule { }
