import { TestBed } from '@angular/core/testing';

import { SpotifyServiceToken } from './spotify.service';

describe('SpotifyServiceService', () => {
  let service: SpotifyServiceToken;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyServiceToken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
