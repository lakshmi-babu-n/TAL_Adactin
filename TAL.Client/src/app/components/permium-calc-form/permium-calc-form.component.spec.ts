import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermiumCalcFormComponent } from './permium-calc-form.component';

describe('PermiumCalcFormComponent', () => {
  let component: PermiumCalcFormComponent;
  let fixture: ComponentFixture<PermiumCalcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermiumCalcFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermiumCalcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
