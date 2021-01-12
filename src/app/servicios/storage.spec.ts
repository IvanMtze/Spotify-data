import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';


describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        StorageService,
        {
          provide: StorageService,
        }
      ]
    });
    service = TestBed.inject(StorageService);
  });

  it('Should call setSession() method', () => {
    service.setSession('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWN0b3IiLCJpYXQiOjE2MTAyMTg1MDMsImV4cCI6MTYxMDMwNDkwM30.NKL9cczXLcIxNU9rMA0AK94iHtwu--NgQoSvlRfwDz2rJRwjdD2aY_moC-nkZ3Qjp8kEyTbGtWvrvIl0Iu8vrg');
    expect(service.islogged()).toBeTruthy();
  });

  it('Should call setSession() method', () => {
    service.setSession('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWN0b3IiLCJpYXQiOjE2MTAyMTg1MDMsImV4cCI6MTYxMDMwNDkwM30.NKL9cczXLcIxNU9rMA0AK94iHtwu--NgQoSvlRfwDz2rJRwjdD2aY_moC-nkZ3Qjp8kEyTbGtWvrvIl0Iu8vrg');

    expect(service.getSession('token')).toBe('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWN0b3IiLCJpYXQiOjE2MTAyMTg1MDMsImV4cCI6MTYxMDMwNDkwM30.NKL9cczXLcIxNU9rMA0AK94iHtwu--NgQoSvlRfwDz2rJRwjdD2aY_moC-nkZ3Qjp8kEyTbGtWvrvIl0Iu8vrg');
  });


  it('Should call sessionDeleteAll() method',async () => {
    service.setSession('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWN0b3IiLCJpYXQiOjE2MTAyMTg1MDMsImV4cCI6MTYxMDMwNDkwM30.NKL9cczXLcIxNU9rMA0AK94iHtwu--NgQoSvlRfwDz2rJRwjdD2aY_moC-nkZ3Qjp8kEyTbGtWvrvIl0Iu8vrg');
    service.sessionDeleteAll();
    let res = service.getSession('token');

    expect(res).toBeNull();
   });

   it('Should call sessionDeleteByKey() method',async () => {
    service.setSession('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWN0b3IiLCJpYXQiOjE2MTAyMTg1MDMsImV4cCI6MTYxMDMwNDkwM30.NKL9cczXLcIxNU9rMA0AK94iHtwu--NgQoSvlRfwDz2rJRwjdD2aY_moC-nkZ3Qjp8kEyTbGtWvrvIl0Iu8vrg');
    service.sessionDeleteByKey('token');
    let res = service.getSession('token');

    expect(res).toBeNull();
   });
});