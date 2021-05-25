import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiPath = environment.api.users;
  constructor(readonly http: HttpClient) { }

  updateProfile(profileDetails: any, id: any) {
    const url = `${this.apiPath}/api/v2/users/${id}`;
    return this.http.patch(url, profileDetails);
  }
}
