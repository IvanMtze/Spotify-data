import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  correo: string = '';
  correo_confirm: string = '';
  contra: string = '';
  nombre:  string = '';
  dia: string = '';
  mes: string = '';
  anio: string = '';
  sexo: string = '';
  
  constructor() { }
  ngOnInit(): void {}  
  registrarUsuario($event){
    
    let usuario = {
      correo: this.correo,
      correo2: this.correo_confirm,
      pass: this.contra,
      nombre: this.nombre,
      fnac:{
        dia:this.dia,
        mes:this.mes,
        anio:this.anio
      },
      sexo: this.sexo
    }
    console.log(usuario)
  }
}

