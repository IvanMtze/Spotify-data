import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
    {
    path: 'registro',
    component: RegistroComponent
  },
    {
    path:"",
    redirectTo:'/ladingPage',
    pathMatch: 'full'
  },
  {
   path: 'ladingPage',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) 
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
