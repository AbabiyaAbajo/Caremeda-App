import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProjectResolver } from './project-resolver.service';
import { SearchComponent } from './pages/search/search.component';
// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ClientAuthGuard } from '@core/guards/client-auth.guard';

export const routes: Routes = [
  {
    path: 'search/:type',
    component: SearchComponent,
    data: { headerTheme: 'dark' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
