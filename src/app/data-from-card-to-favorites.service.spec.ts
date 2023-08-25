import { TestBed } from '@angular/core/testing';

import { DataFromCardToFavoritesService } from './data-from-card-to-favorites.service';

describe('DataFromCardToFavoritesService', () => {
  let service: DataFromCardToFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFromCardToFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
