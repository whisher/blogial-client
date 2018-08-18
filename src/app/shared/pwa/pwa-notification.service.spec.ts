import { TestBed, inject } from '@angular/core/testing';

import { PwaNotificationService } from './pwa-notification.service';

describe('PushNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PwaNotificationService]
    });
  });

  it('should be created', inject([PwaNotificationService], (service: PwaNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
