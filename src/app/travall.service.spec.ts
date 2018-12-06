import { TestBed } from '@angular/core/testing';

import { TravallService } from './travall.service';

describe('TravallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravallService = TestBed.get(TravallService);
    expect(service).toBeTruthy();
  });
});
