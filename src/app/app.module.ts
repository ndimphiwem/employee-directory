import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbModule,
    NoopAnimationsModule,
    AuthModule.forRoot({
      domain: 'ndimphiwem.eu.auth0.com',
      clientId: '7zojGdlUucozWGPcJJn0G1cx1npaZQTZ',
      audience: 'https://ndimphiwem.eu.auth0.com/api/v2/',
      scope: 'update:current_user_metadata read:current_user_metadata read:current_user'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
