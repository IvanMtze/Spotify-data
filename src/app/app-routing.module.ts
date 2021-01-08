import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UiAdminComponent } from './ui-admin/ui-admin.component';
import { UiUsuarioComponent } from "./ui-usuario/ui-usuario.component";

import{AuthGuardGuard} from './servicios/auth-guard.guard';
const routes: Routes = [
  {
    path:"",
    redirectTo:"landingPage",
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
    component: UiAdminComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: "user", 
    component: UiUsuarioComponent,
    canActivate: [AuthGuardGuard]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
