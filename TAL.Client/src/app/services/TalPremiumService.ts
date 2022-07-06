import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiUrl } from '../constants/ApiUrl';

@Injectable({
  providedIn: 'root',
})
export class TalPremiumService {
  constructor(private http: HttpClient) {}

  //API call to get occupation list
  getOccupationList() {
    return this.http.get<string[]>(
      environment.apiBaseUrl + ApiUrl.occupationList
    );
  }
}
