import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  {
    path: 'profile/:id',
    component: ProfileComponent,
    data:{ headerTheme: 'dark' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
