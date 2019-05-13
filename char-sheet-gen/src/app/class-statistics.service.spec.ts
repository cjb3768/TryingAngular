import { TestBed } from '@angular/core/testing';

import { ClassStatisticsService } from './class-statistics.service';

describe('ClassStatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassStatisticsService = TestBed.get(ClassStatisticsService);
    expect(service).toBeTruthy();
  });
});
