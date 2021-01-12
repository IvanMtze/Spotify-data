import { Component, OnInit } from '@angular/core';
import { OperacionesSpotifyService } from '../servicios/operaciones-spotify.service';
import { GenerosApi } from '../models/GenerosApi';
import { Artistas } from '../models/artistas';
@Component({
  selector: 'app-ui-admin',
  templateUrl: './ui-admin.component.html',
  styleUrls: ['./ui-admin.component.scss']
})
export class UiAdminComponent implements OnInit {

  constructor(private spotifyService: OperacionesSpotifyService) {
   }

   spotifyArtistas$: Artistas[];
  
   ngOnInit(): void {
   }
 
   mostrar(){
     return this.spotifyService.getArtistas()
     .subscribe(
       data => this.spotifyArtistas$ = data)
    }
 

}
