import { Component,OnInit } from '@angular/core';
import {OperacionesSpotifyService} from '../servicios/operaciones-spotify.service';
import {Artistas} from '../models/artistas';
import {Track} from '../models/track';
import {Apollo, gql} from 'apollo-angular';

const GET_POSTS_OF_AUTHOR = gql`
query{
  song(uri: "2H7PHVdQ3mXqEHXcvclTB0")
}
`;
@Component({
  selector: 'app-ui-usuario',
  templateUrl: './ui-usuario.component.html',
  styleUrls: ['./ui-usuario.component.scss']
})


export class UiUsuarioComponent implements OnInit {

  constructor(private spotifyService: OperacionesSpotifyService, private apollo:Apollo) { }


  spotifyArtistas$: Artistas[];
  spotifyTracks$: Track[];
  moods: string[]
  url_song: string[]
  ngOnInit(): void {
    this.obtenerCanciones();
  }

  mostrar(){
    return this.spotifyService.getArtistas()
    .subscribe(
      data => this.spotifyArtistas$ = data)
   }

   obtenerCanciones() {
      this.spotifyService.getTracks().subscribe(data=>{
        this.spotifyTracks$ = data;
        if (this.spotifyTracks$.length > 0){
          for(var i in this.spotifyTracks$){
            let id = i;
            this.apollo.watchQuery({
                query: GET_POSTS_OF_AUTHOR,
                variables:{
                  uri:id,
                },
              }).valueChanges.subscribe((result:any) => {
                this.moods = result?.data?.song?.mood;
                this.url_song = result?.data?.song?.url_song;
            });
          }
        }
      });
    }


}
