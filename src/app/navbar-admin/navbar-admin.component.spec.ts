import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdminComponent } from './navbar-admin.component';

describe('NavbarAdminComponent', () => {
  let component: NavbarAdminComponent;
  let fixture: ComponentFixture<NavbarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Should call  cerrarSesion() method', () => {
    spyOn(console, 'log');
    component.cerrarSesion();
    expect(console.log).toHaveBeenCalledWith('sesion cerrada');
  });
});
