import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermiumCalcResultComponent } from './permium-calc-result.component';

describe('PermiumCalcResultComponent', () => {
  let component: PermiumCalcResultComponent;
  let fixture: ComponentFixture<PermiumCalcResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermiumCalcResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermiumCalcResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
