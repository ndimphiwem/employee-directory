import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { LandingComponent } from "./landing/landing.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      }
    ]
  }
];