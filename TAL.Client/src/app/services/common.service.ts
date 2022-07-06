import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  premium = new Subject<number>();

  setPerium(premium: number){
    this.premium.next(premium);
  }

  getPerium(){
    return this.premium
  }
}
