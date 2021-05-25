import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, tap, pluck, filter } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './client-auth.component.html'
})
export class AuthComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {   
  }

}

