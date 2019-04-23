import { TestBed } from '@angular/core/testing';

import { ProficienciesService } from './proficiencies.service';

describe('ProficienciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProficienciesService = TestBed.get(ProficienciesService);
    expect(service).toBeTruthy();
  });
});
