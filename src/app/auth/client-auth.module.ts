import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './client-auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingGuard } from '../landing.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [LandingGuard]
    
  }
];

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AuthComponent
  ]
})
export class ClientAuthModule { }
