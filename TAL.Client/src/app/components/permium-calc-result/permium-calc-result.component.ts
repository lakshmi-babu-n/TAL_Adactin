import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-permium-calc-result',
  templateUrl: './permium-calc-result.component.html',
  styleUrls: ['./permium-calc-result.component.scss'],
})
export class PermiumCalcResultComponent implements OnInit {
  premiumAmount: number = 0;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.premium.subscribe(
      (premiumAmount) => (this.premiumAmount = premiumAmount)
    );
  }
}
