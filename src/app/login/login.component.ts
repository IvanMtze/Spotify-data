
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router} from "@angular/router";
import { UsersService } from '../servicios/users.service';
import { UsersApi } from "../models/usersapi";
import { StorageService } from "../servicios/storage.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  result = '';
  nombreUsuario = '';
  contrasenia = '';

  constructor(
    private usersService: UsersService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    var mydata = new UsersApi;

    if (this.nombreUsuario == "" || this.contrasenia == "") {

      alert('USUARIO Y CONTRASEÑA REQUERIDOS');

    } else {

      mydata.username = this.nombreUsuario;
      mydata.password = this.contrasenia;

      return this.usersService.loginUser(mydata)
        .subscribe((data: any) => {

          this.storageService.setSession("token", data.accessToken);
          if(mydata.username==="admin"){
            this.router.navigate(['admin']);
          }else{
            this.router.navigate(['user']);
          }

        })

    }

  }
}