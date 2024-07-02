import { TestBed } from '@angular/core/testing';

import { RestautarentService } from './restautarent.service';

describe('RestautarentService', () => {
  let service: RestautarentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestautarentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
