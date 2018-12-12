// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './help/auth.guard';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },

    // otherwise redirect to about
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);