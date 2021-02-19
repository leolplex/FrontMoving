import { TestBed } from '@angular/core/testing';

import { CalculateTravelsService } from './calculate-travels.service';

describe('CalculateTravelsService', () => {
  let service: CalculateTravelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateTravelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
