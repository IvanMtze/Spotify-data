import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';

import { AuthGuardGuard } from './auth-guard.guard';
import { StorageService } from './storage.service';

describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard;
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        StorageService,
        RouterTestingModule,
        {
          provide: StorageService,
        }
      ]

    });
    guard = TestBed.inject(AuthGuardGuard);
    service = TestBed.inject(StorageService);
  });

  xit('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('Should call  canActivate() method', () => {
    service.sessionDeleteAll();
    expect(guard.canActivate()).toBeFalse();
  });
  it('Should call  canActivate() method to true', () => {
    service.setSession('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWN0b3IiLCJpYXQiOjE2MTAyMTg1MDMsImV4cCI6MTYxMDMwNDkwM30.NKL9cczXLcIxNU9rMA0AK94iHtwu--NgQoSvlRfwDz2rJRwjdD2aY_moC-nkZ3Qjp8kEyTbGtWvrvIl0Iu8vrg');
    expect(guard.canActivate()).toBeTrue();
  });

});
