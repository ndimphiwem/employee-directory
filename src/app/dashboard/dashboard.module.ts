import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

import { routes } from './dashboard.routes';
import { LandingComponent } from './landing/landing.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { ProfileComponent } from './profile/profile.component';
import { EmployeesComponent } from './employees/employees.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LandingComponent,
    ProfileComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MdbModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
