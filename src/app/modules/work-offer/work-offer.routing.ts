import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkOfferViewComponent } from './pages/view/view.component';
import { ClientAuthGuard } from '@app/core/guards/client-auth.guard';
import { NewComponent } from './pages/new/new.component';

export const routes: Routes = [
  {
    path: 'work-offer/new',
    component: NewComponent,
    canActivate: [ClientAuthGuard],
    data: { headerTheme: 'dark' },
  },
  {
    path: 'work-offer/:id',
    component: WorkOfferViewComponent,
    data: { headerTheme: 'dark' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOfferRoutingModule { }
