import { TestBed } from '@angular/core/testing';

import { AbilityScoresService } from './ability-scores.service';

describe('AbilityScoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbilityScoresService = TestBed.get(AbilityScoresService);
    expect(service).toBeTruthy();
  });
});
