import { TestBed } from '@angular/core/testing';

import { LoadRostersService } from './load-rosters.service';

describe('LoadRostersService', () => {
  let service: LoadRostersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadRostersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
