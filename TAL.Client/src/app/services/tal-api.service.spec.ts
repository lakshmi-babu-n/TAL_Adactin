import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TalApiService } from './tal-api.service';
import { environment } from 'src/environments/environment';
import { ApiUrl } from '../constants/ApiUrl';

describe('TalApiService', () => {
  let service: TalApiService;
  let httpTestingController: HttpTestingController;
  let mockOccupationList: string[] = ['Cleaner', 'Doctor'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TalApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get occupationList data', () => {
    service.getOccupationList().subscribe((res) => {
      expect(res).toEqual(mockOccupationList);
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `${environment.apiBaseUrl}${ApiUrl.occupationList}`,
    });

    req.flush(mockOccupationList);
  });

  it('should get calculated premium amount', () => {
    let payload = { age: 30, deathCoverageAmount: 100, occupation: 'Doctor' };
    service.calcMonthlyPremium(payload).subscribe((res) => {
      expect(res).toEqual(36);
    });

    const req = httpTestingController.expectOne({
      method: 'POST',
      url: `${environment.apiBaseUrl}${ApiUrl.monthlyPremium}`,
    });

    req.flush(36);
  });
});
