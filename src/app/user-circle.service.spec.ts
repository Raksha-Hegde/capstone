import { TestBed, inject } from '@angular/core/testing';

import { UserCircleService } from './user-circle.service';

describe('UserCircleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCircleService]
    });
  });

  it('should be created', inject([UserCircleService], (service: UserCircleService) => {
    expect(service).toBeTruthy();
  }));
});
