import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { GenerosApi } from '../models/GenerosApi';

import { OperacionesSpotifyService } from './generos.service';
import { StorageService } from './storage.service';



describe('OperacionesSpotifyService', () => {
  let service: OperacionesSpotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        OperacionesSpotifyService,
        StorageService,
        {
          provide: OperacionesSpotifyService,StorageService
        }
      ]
    });
    service = TestBed.inject(OperacionesSpotifyService);
  });

  it('Should call  getGeneros() method', () => {
    let res =service.getGeneros()
    expect(res).toBeTruthy();
   });

  it('Should call MessageError method', () => {
    let res =service.MessageError(throwError)
    expect(res).toBeTruthy()
   });


   it('Should call handleError method', () => {
    let res =service.handleError(throwError)
    expect(res).toBeTruthy()
   });

});