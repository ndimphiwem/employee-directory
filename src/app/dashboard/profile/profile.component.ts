import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { first, switchMap, tap } from 'rxjs/operators';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: any;
  profileForm: any;
  loading = false;
  workLocations = ['Los Angeles', 'Cape Town', 'London'];
  userAddress: any;

  constructor(readonly auth: AuthService, readonly profile: ProfileService) {
    this.auth.user$.pipe(
      first(),
      tap(user => this.user = user),
      switchMap((user: any) =>  this.profile.getProfile(user?.sub)),
    ).subscribe((userProfile: any) => {
      const userAddress = { ...userProfile?.user_metadata?.address };
      this.userAddress = userAddress;
      this.profileForm = new FormGroup({
        streetAddress: new FormControl(userAddress?.streetAddress || null, Validators.required),
        suburb: new FormControl(userAddress?.suburb || null, Validators.required),
        city: new FormControl(userAddress?.city || null, Validators.required),
        province: new FormControl(userAddress?.province || null, Validators.required),
        workLocation: new FormControl(userAddress?.workLocation || '', Validators.required)
      });
    });
  }

  ngOnInit(): void {

  }

  updateProfile(profile: any) {
    console.log('profile details', profile?.value, this.user);
    if (profile?.valid) {
      this.loading = true;
      this.profile.updateProfile({
        user_metadata: {
          address: {...profile?.value}
        }
      }, this.user?.sub).subscribe((updatedProile: any) => {
        this.userAddress = {...updatedProile?.user_metadata?.address};
        console.log('user update', updatedProile);
        this.loading = false;
      });
    }
  }
}
