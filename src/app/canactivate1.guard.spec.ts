import { TestBed } from '@angular/core/testing';

import { Canactivate1Guard } from './canactivate1.guard';

describe('Canactivate1Guard', () => {
  let guard: Canactivate1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Canactivate1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
