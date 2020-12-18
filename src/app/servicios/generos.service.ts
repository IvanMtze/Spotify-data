import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { StorageService } from "../servicios/storage.service";
import {GenerosApi} from "../models/GenerosApi";

@Injectable({
  providedIn: 'root'
})
export class OperacionesSpotifyService {

  apiURL = 'https://jwt-api-imc.herokuapp.com/';


  constructor(private http: HttpClient,
              private storageService: StorageService) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer ' + this.storageService.getLocal("token")
      'Authorization': 'Bearer ' + this.storageService.getSession("token")

    })
  }
  // HttpClient API post() method => Create employee
  getGeneros(){
    return this.http.get<GenerosApi>(this.apiURL + '/api/album/');
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  MessageError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert(errorMessage);
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
