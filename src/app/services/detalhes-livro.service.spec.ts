import { TestBed } from '@angular/core/testing';

import { DetalhesLivroService } from './detalhes-livro.service';

describe('DetalhesLivroService', () => {
  let service: DetalhesLivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhesLivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
