import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UiAdminComponent } from './ui-admin/ui-admin.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/landingPage",
    pathMatch: 'full'
  },
    {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "landingPage",
    component: LandingPageComponent 
  },
  {
    path: "login", 
    component: LoginComponent
  },
  {
    path: "admin", 
    component: UiAdminComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
