import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing} from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';


// import { AppRoutingModule } from './app-routing.module';
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
import { AlertComponent } from './alert/alert.component';
import { AuthGuard } from './help/auth.guard';
import { JwtInterceptor } from './help/jwt.interceptor';
import { ErrorInterceptor } from './help/error.interceptor';
import { AlertService  } from './services/alert.service';
import {  AuthService } from './services/auth.service';
import {  UserService } from './services/user.service';

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
    AboutComponent,
    AlertComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    
  ],
  providers: [,
        AuthGuard,
        AlertService,
        AuthService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

