import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { DashboardComponent } from "./dashboard.component";
import { EmployeesComponent } from "./employees/employees.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];