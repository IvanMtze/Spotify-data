import { Component, OnInit } from '@angular/core';
import { OperacionesSpotifyService } from '../servicios/generos.service';
import { GenerosApi } from '../models/GenerosApi';
import { Artistas } from '../models/artistas';
@Component({
  selector: 'app-ui-admin',
  templateUrl: './ui-admin.component.html',
  styleUrls: ['./ui-admin.component.scss']
})
export class UiAdminComponent implements OnInit {
  external_urls: string;
  followers: string;
  href: string;
  id: number;
  name: string;
  popularity: number;
  type: string;
  uri: string;

  constructor(private operacionesSpotify: OperacionesSpotifyService) {
    //astistasApi$ = new Array<Artistas>();
   }

  ngOnInit(): void {
  }

/*   mostrar(){
    return this.artistasApi$.getPesos()
    .subscribe(
      data => this.artistasApi$ = data
      )
   } */

}
