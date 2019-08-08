import { TestBed } from '@angular/core/testing';

import { PizzaBuilderService } from './pizza-builder.service';

describe('PizzaBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaBuilderService = TestBed.get(PizzaBuilderService);
    expect(service).toBeTruthy();
  });
});
