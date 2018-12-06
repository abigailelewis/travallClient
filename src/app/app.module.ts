import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrewComponent } from './crew/crew.component';
import { NavComponent } from './nav/nav.component';
import { TransportationComponent } from './transportation/transportation.component';
import { ActivityComponent } from './activity/activity.component';
import { HeaderComponent } from './header/header.component';
import { TravallComponent } from './travall/travall.component';
import { CreateComponent } from './create/create.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CrewComponent,
    NavComponent,
    TransportationComponent,
    ActivityComponent,
    HeaderComponent,
    TravallComponent,
    CreateComponent,
    SignupComponent,
    LoginComponent,
    AuthComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
