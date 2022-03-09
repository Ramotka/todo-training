import { TestBed } from '@angular/core/testing';

import { ProjektanciService } from './projektanci.service';

describe('ProjektanciService', () => {
  let service: ProjektanciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjektanciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
