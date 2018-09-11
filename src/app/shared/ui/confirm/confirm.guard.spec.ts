import { TestBed, async, inject } from '@angular/core/testing';

import { IsPristineGuard } from './confirm.guard';

describe('IsPristineGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsPristineGuard]
    });
  });

  it('should ...', inject([IsPristineGuard], (guard: IsPristineGuard) => {
    expect(guard).toBeTruthy();
  }));
});
