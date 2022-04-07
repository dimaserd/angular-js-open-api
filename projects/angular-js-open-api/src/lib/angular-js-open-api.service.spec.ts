import { TestBed } from '@angular/core/testing';

import { AngularJsOpenApiService } from './angular-js-open-api.service';

describe('AngularJsOpenApiService', () => {
  let service: AngularJsOpenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularJsOpenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
