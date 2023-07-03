import { TestBed } from '@angular/core/testing';

import { Servi1Service } from './servi1.service';

describe('Servi1Service', () => {
  let service: Servi1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servi1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
