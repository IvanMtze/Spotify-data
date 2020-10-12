import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../home/navbar/navbar.component';

import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [{ path: '', component: LandingPageComponent }];

@NgModule({
  declarations:[NavbarComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,NavbarComponent]
})
export class LandingPageRoutingModule { }
