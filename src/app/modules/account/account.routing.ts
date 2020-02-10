import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientAuthGuard } from '@core/guards/client-auth.guard';

import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './pages/account/dashboard/dashboard.component';
import { SettingsComponent } from './pages/account/settings/settings.component';
import { UpgradeComponent } from './pages/account/upgrade/upgrade.component';
import { SecurityComponent } from './pages/account/security/security.component';
import { BillingComponent } from './pages/account/billing/billing.component';
import { WorkOffersComponent } from './pages/account/work-offers/work-offers.component';
import { InboxComponent } from './pages/account/inbox/inbox.component';
import { NotificationsComponent } from './pages/account/notifications/notifications.component';
import { ShiftsComponent } from './pages/account/shifts/shifts.component';

export const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [ClientAuthGuard],
    data: { headerTheme: 'dark' },
    children: [
      {
        path: 'billing',
        component: BillingComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'inbox',
        component: InboxComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
      {
        path: 'security',
        component: SecurityComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'shifts',
        component: ShiftsComponent,
      },
      {
        path: 'upgrade',
        component: UpgradeComponent,
      },
      {
        path: 'work-offers',
        component: WorkOffersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
