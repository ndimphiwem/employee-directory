import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './sidenav.component';
import { SideNavService } from './_services/sidenav.service';;

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [SideNavComponent],
  providers: [SideNavService],
  exports: [SideNavComponent]
})
export class SideNavModule { }
