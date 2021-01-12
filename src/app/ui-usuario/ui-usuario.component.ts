import { Component,OnInit } from '@angular/core';
import {OperacionesSpotifyService} from '../servicios/operaciones-spotify.service';
import {Artistas} from '../models/artistas';

@Component({
  selector: 'app-ui-usuario',
  templateUrl: './ui-usuario.component.html',
  styleUrls: ['./ui-usuario.component.scss']
})
export class UiUsuarioComponent implements OnInit {

  constructor(private spotifyService: OperacionesSpotifyService) { }

  spotifyArtistas$: Artistas[];
  
  ngOnInit(): void {
  }

  mostrar(){
    return this.spotifyService.getArtistas()
    .subscribe(
      data => this.spotifyArtistas$ = data)
   }

}
