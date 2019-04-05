import { TestBed } from '@angular/core/testing';

import { GetCardsService } from './get-cards.service';

describe('GetCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCardsService = TestBed.get(GetCardsService);
    expect(service).toBeTruthy();
  });
});
