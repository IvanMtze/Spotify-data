import { Injectable } from '@angular/core';
import { SpotifyAuth } from '../models/spotify-auth';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceToken {

  apiURL = 'https://accounts.spotify.com/api/token';


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ZmM3YWFmOWRlNzRkNGY5YThhNzc3Y2FlYWRhZWZkMWM6YzRmMTQyYzk5Zjc1NDAxMjg5NmI4N2UxNzEyMDkzY2M='
    })
  }
  getTokenSpotify(spotifyAuth: SpotifyAuth): void{
    const body = new HttpParams()
    .set("code",spotifyAuth.code)
    .set("grant_type",spotifyAuth.grant_type)
    .set('redirect_uri',spotifyAuth.redirect_uri);
    console.log(body.toString());
    this.http.post(this.apiURL,body.toString(),this.httpOptions).subscribe(res=>{
      console.log(res);
    });
  }

 }
