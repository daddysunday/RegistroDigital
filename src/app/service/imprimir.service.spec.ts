import { TestBed } from '@angular/core/testing';

import { ImprimirService } from './imprimir.service';

describe('ImprimirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImprimirService = TestBed.get(ImprimirService);
    expect(service).toBeTruthy();
  });
});
