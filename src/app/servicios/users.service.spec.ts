import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { UsersApi } from '../models/usersapi';
import { UsersRegisterApi } from '../models/usersregisterapi';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UsersService);
  });
  
  xit('Should call loginUser method', () => {
    let user = new UsersApi;
    user.username='victor'
    user.password='123456789'
    let res =service.loginUser(user)
    expect(res).toBeTruthy()
   });

   xit('Should call registerUser method', () => {
    let user = new UsersRegisterApi;
    user.name='Jesus'
    user.email='jesus.ah@gmail.com'
    user.username='jesus'
    user.password='123456789'
    user.role=['ROLE_USER']

    let res =service.registerUser(user)
    expect(res).toBeTruthy()
   });
  
   xit('Should call MessageError method', () => {
    let res =service.MessageError(throwError)
    expect(res).toBeTruthy()
   });


   xit('Should call handleError method', () => {
    let res =service.handleError(throwError)
    expect(res).toBeTruthy()
   });

   

});
