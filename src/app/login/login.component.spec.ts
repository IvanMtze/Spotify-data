import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StorageService } from '../servicios/storage.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule.withRoutes([])],
      providers: [
        StorageService,LoginComponent,
        {
          provide: StorageService,
        }
      ],
      declarations: [ LoginComponent ],
    })
    .compileComponents();
    component = TestBed.inject(LoginComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call  iniciarSesion() method', () => {
    component.nombreUsuario='victor';
    component.contrasenia='123456789'
    expect(component.iniciarSesion()).toBeTruthy();
  });


});
