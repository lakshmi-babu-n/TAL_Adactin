import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  permium = new Subject<number>();

  setPerium(permium: number){
    this.permium.next(permium);
  }

  getPerium(){
    return this.permium
  }
}
