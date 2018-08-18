import { TestBed, inject } from '@angular/core/testing';

import { PwaInstallService } from './pwa-install.service';

describe('PwaInstallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PwaInstallService]
    });
  });

  it('should be created', inject([PwaInstallService], (service: PwaInstallService) => {
    expect(service).toBeTruthy();
  }));
});
