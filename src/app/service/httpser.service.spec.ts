import { TestBed, inject } from '@angular/core/testing';

import { HttpserService } from './httpser.service';

describe('HttpserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpserService]
    });
  });

  it('should be created', inject([HttpserService], (service: HttpserService) => {
    expect(service).toBeTruthy();
  }));
});
