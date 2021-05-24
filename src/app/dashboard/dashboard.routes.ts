import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { DashboardComponent } from "./dashboard.component";
import { LandingComponent } from "./landing/landing.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LandingComponent
      }
    ]
  }
];