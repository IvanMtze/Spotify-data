
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page.component';
import { AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
})
export class LandingPageModule { }
