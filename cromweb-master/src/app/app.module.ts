import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsUsersComponent } from './components/details-users/details-users.component';
import { ListUsersComponent } from './components/expert/list-users/list-users.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import {FormsModule} from '@angular/forms';
/* services */
import { DataApiService } from './services/data-api.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsLotesComponent } from './components/details-lotes/details-lotes.component';
import { DetailsImageComponent } from './components/details-image/details-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    DetailsUsersComponent,
    ListUsersComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    DetailsLotesComponent,
    DetailsImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
