import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  premium = new Subject<number>();

  setPremium(premium: number){
    this.premium.next(premium);
  }

  getPremium(){
    return this.premium
  }
}
