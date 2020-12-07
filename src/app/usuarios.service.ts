import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
private usuarios = new BehaviorSubject<any>([  
  {correo:'gustavo@gmail.com',contra:'12345'},
  {correo:'gerardo@gmail.com',contra:'12345'},
  {correo:'oswaldo@gmail.com',contra:'12345'},
  {correo:'usuario@gmail.com',contra:'12345'}
]);
  constructor() { }
  usuario = this.usuarios.asObservable();


}