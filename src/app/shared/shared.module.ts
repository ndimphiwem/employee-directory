import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavModule } from './sidenav/sidenav.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideNavModule
  ],
  exports: [SideNavModule]
})
export class SharedModule { }
