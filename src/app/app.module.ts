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


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    UiAdminComponent,
    NavbarInicialComponent,
    NavbarUsuarioComponent,
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
