import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get premium amount', () => {
    let premiumAmount=0;
    service.getPremium().subscribe((premium: number) => {
      premiumAmount=premium;
    });
    service.setPremium(10);
    expect(premiumAmount).toBe(10);
  });
});
