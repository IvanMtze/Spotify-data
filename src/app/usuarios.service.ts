import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  
 
private usuarios = new BehaviorSubject<any>([  {correo:'gustavo@gmail.com',contra:'12345'},
  {correo:'adolfo@gmail.com',contra:'12345'},
  {correo:'hernandez@gmail.com',contra:'12345'}
]);

  constructor() { }
}
