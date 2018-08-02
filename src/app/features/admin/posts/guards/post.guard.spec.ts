import { TestBed, async, inject } from '@angular/core/testing';

import { PostPageGuard } from './post.guard';

describe('PostPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostPageGuard]
    });
  });

  it('should ...', inject([PostPageGuard], (guard: PostPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
