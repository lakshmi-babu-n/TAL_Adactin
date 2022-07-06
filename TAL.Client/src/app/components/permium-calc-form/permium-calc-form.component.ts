import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-permium-calc-form',
  templateUrl: './permium-calc-form.component.html',
  styleUrls: ['./permium-calc-form.component.scss'],
})
export class PermiumCalcFormComponent implements OnInit {
  public premiumForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.generateForm();
  }

  // Create Form
  generateForm() {
    this.premiumForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      dob: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
          ),
        ],
      ],
      age: ['', Validators.required],
      occupation: ['', Validators.required],
      deathCoverageAmount: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+(\.\d{1,2})?$/),
          Validators.min(1),
        ],
      ],
    });
  }
}
