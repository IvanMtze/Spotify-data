import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../servicios/users.service';
import { UsersRegisterApi } from "../models/usersregisterapi";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  nombre = '';
  nombreUsuario = '';
  correo= '';
  role= ['user'];
  contrasenia = '';

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registrarUsuario() {
    var mydata = new UsersRegisterApi;

    if (this.nombre == "" ||  this.nombreUsuario == "" || this.correo == "" || this.contrasenia == "" ) {

      alert('Datos Requeridos no se aceptan campos vacios');

    } else {
      mydata.name=this.nombre;
      mydata.username = this.nombreUsuario;
      mydata.email=this.correo;
      mydata.role=this.role;
      mydata.password = this.contrasenia;

      this.usersService.registerUser(mydata)
        .subscribe((data: any) => {
        })
        alert('usuario registrado');
        this.router.navigate(['/']);
    }

  }
}