import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { UiAdminComponent } from './ui-admin/ui-admin.component';
import { NavbarInicialComponent } from './navbar-inicial/navbar-inicial.component';
import { UsuariosService } from './usuarios.service';
import { NavbarUsuarioComponent } from './navbar-usuario/navbar-usuario.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { UiUsuarioComponent } from './ui-usuario/ui-usuario.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    UiAdminComponent,
    NavbarInicialComponent,
    NavbarUsuarioComponent,
    LandingPageComponent,
    LoginComponent,
    UiUsuarioComponent,
    NavbarAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
