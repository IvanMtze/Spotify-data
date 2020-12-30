import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUsuarioComponent } from './ui-usuario.component';

describe('UiUsuarioComponent', () => {
  let component: UiUsuarioComponent;
  let fixture: ComponentFixture<UiUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
