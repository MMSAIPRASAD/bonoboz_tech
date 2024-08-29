import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardListRoutingModule } from './dashboard-list-routing.module';
import { DashboardListComponent } from './dashboard-list.component';
import {HttpClientModule} from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    DashboardListComponent,FilterPipe, DetailsComponent
  ],
  imports: [
    CommonModule,NgbModule,ReactiveFormsModule,FormsModule,NgxDaterangepickerMd,
    DashboardListRoutingModule,HttpClientModule
  ]
})
export class DashboardListModule { }
