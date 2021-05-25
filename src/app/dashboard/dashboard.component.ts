import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { SideNavService } from '../shared/sidenav/_services/sidenav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document,readonly auth: AuthService,
  readonly sidenav: SideNavService,) { }

  ngOnInit(): void { }

}
