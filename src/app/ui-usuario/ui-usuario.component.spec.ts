import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperacionesSpotifyService } from '../servicios/generos.service';
import { StorageService } from '../servicios/storage.service';

import { UiUsuarioComponent } from './ui-usuario.component';

describe('UiUsuarioComponent', () => {
  let component: UiUsuarioComponent;
  let fixture: ComponentFixture<UiUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        StorageService,OperacionesSpotifyService,
        {
          provide: StorageService,
        }
      ],
      declarations: [ UiUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call  mostar() method', () => {
    expect(component.mostrar()).toBeTruthy();
  });

});
