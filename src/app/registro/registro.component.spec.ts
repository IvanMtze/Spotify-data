import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../servicios/users.service';

import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule.withRoutes([])],
      providers: [
        RegistroComponent,UsersService,
        {
          provide: RegistroComponent,
        }
      ],
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
    component = TestBed.inject(RegistroComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('Should call  registrarUsuario() method', () => {
    component.nombre='Pedro';
    component.nombreUsuario='pedro'
    component.contrasenia='123456789';
    component.correo='ped.ah12@gmail.com';
    component.registrarUsuario();
    expect(component).toBeTruthy();
  });

  
});
