import { Component,OnInit } from '@angular/core';
import {OperacionesSpotifyService} from '../servicios/generos.service';
import {GenerosApi} from '../models/GenerosApi';

@Component({
  selector: 'app-ui-usuario',
  templateUrl: './ui-usuario.component.html',
  styleUrls: ['./ui-usuario.component.scss']
})
export class UiUsuarioComponent implements OnInit {

  constructor(private generosService: OperacionesSpotifyService) { }

  spotifyGenerosApi$: GenerosApi[];
  
  ngOnInit(): void {
    this.mostrar()
  }

  mostrar(){
    return this.generosService.getGeneros()
    .subscribe(
      data => this.spotifyGenerosApi$ = data)
   }

}
