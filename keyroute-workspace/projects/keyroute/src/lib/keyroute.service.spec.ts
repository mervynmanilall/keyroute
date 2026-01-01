import { TestBed } from '@angular/core/testing';

import { KeyrouteService } from './keyroute.service';

describe('KeyrouteService', () => {
  let service: KeyrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
