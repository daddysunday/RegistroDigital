import { TestBed } from '@angular/core/testing';

import { PrintService } from '../services/print.service';

describe('PrintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrintService = TestBed.get(PrintService);
    expect(service).toBeTruthy();
  });
});
