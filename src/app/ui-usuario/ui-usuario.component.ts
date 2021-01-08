import { Component,OnInit } from '@angular/core';
import {OperacionesSpotifyService} from '../servicios/generos.service';
import {GenerosApi} from '../models/GenerosApi';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyAuth } from '../models/spotify-auth';
import {SpotifyServiceToken} from '../servicios/spotify.service';
@Component({
  selector: 'app-ui-usuario',
  templateUrl: './ui-usuario.component.html',
  styleUrls: ['./ui-usuario.component.scss']
})
export class UiUsuarioComponent implements OnInit {

  constructor(private generosService: OperacionesSpotifyService,private spotifyServiceToken:SpotifyServiceToken, private route: ActivatedRoute) { }

  spotifyGenerosApi$: GenerosApi[];
  tokenSpotify=new SpotifyAuth();
  name='';
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['code'];
      this.tokenSpotify.code=this.name;
      this.spotifyServiceToken.getTokenSpotify(this.tokenSpotify);
    });
    //this.mostrar()
  }

  mostrar(){
    return this.generosService.getGeneros()
    .subscribe(
      data => this.spotifyGenerosApi$ = data);
   }

}
