import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProjectResolver } from './project-resolver.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { RecoverComponent } from './pages/recover/recover.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { headerTheme: 'dark' },
  },
  {
    path: 'login/verify',
    component: LoginComponent,
    data: { headerTheme: 'dark', verify: true },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { headerTheme: 'dark' },
  },
  {
    path: 'recover',
    component: RecoverComponent,
    data: { headerTheme: 'dark' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
