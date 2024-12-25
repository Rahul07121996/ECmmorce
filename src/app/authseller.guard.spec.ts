import { TestBed } from '@angular/core/testing';

import { AuthsellerGuard } from './authseller.guard';

describe('AuthsellerGuard', () => {
  let guard: AuthsellerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthsellerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
