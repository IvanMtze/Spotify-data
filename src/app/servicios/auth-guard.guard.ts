import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  canActivate(): boolean{
    if (this.storageService.islogged()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  } 
  
}
