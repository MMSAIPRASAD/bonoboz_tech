import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardListComponent } from './dashboard-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{ path: '', component: DashboardListComponent },

  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardListRoutingModule { }
