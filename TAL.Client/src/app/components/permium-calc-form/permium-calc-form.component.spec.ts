import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { PermiumCalcFormComponent } from './permium-calc-form.component';

describe('PermiumCalcFormComponent', () => {
  let component: PermiumCalcFormComponent;
  let fixture: ComponentFixture<PermiumCalcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermiumCalcFormComponent ],
      providers:[FormBuilder,HttpClient,HttpHandler]
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
