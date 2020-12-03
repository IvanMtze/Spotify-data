import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UsuariosService } from '../usuarios.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarios = [];
  
  contra: string = '';
  

  constructor(private _data: UsuariosService,private router: Router) { }
  ngOnInit(): void {
    this._data.usuario.subscribe(res=>this.usuarios=res);
  }
  iniciarSesion(correo,contra){
    
    this.usuarios.forEach(usuario => {
      if(usuario.correo == correo && usuario.contra == contra){
        console.log("inicio de sesión exitoso")
        this.router.navigate([''])
      } else {
        console.log("inicio de sesión falló")
      }
    });
    
    
  }

}
