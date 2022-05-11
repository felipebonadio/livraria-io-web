import { TestBed } from '@angular/core/testing';

import { ViacepServiceService } from './viacep-service.service';

describe('ViacepServiceService', () => {
  let service: ViacepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViacepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
