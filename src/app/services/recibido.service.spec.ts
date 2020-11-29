import { TestBed } from '@angular/core/testing';

import { RecibidoService } from './recibido.service';

describe('RecibidoService', () => {
  let service: RecibidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecibidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
