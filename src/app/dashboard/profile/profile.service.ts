import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiPath = environment.api.users;
  constructor(readonly http: HttpClient, readonly auth: AuthService) { }

  updateProfile(profileDetails: any, id: any) {
    const url = `${this.apiPath}/api/v2/users/${id}`;
    return this.auth.getAccessTokenSilently({
      audience: 'https://ndimphiwem.eu.auth0.com/api/v2/',
      scope: 'update:current_user_metadata'
    }).pipe(
      switchMap(token => this.http.patch(url, profileDetails, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }))
    );
  }

  getProfile(id: any) {
    const url = `${this.apiPath}/api/v2/users/${id}`;
    return this.auth.getAccessTokenSilently({
      audience: 'https://ndimphiwem.eu.auth0.com/api/v2/',
      scope: 'read:current_user_metadata'
    }).pipe(
      switchMap(token => this.http.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }))
    );
  }
}
