import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUsuarioComponent } from './navbar-usuario.component';

describe('NavbarUsuarioComponent', () => {
  let component: NavbarUsuarioComponent;
  let fixture: ComponentFixture<NavbarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Should call  cerrarSesion() method', () => {
    spyOn(console, 'log');
    component.cerrarSesion();
    expect(console.log).toHaveBeenCalledWith('Sesión cerrada');
  });

});
