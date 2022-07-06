import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { TalApiService } from 'src/app/services/tal-api.service';
import { ValidateDOB } from 'src/app/validators/dateOfBirth.validator';

@Component({
  selector: 'app-permium-calc-form',
  templateUrl: './permium-calc-form.component.html',
  styleUrls: ['./permium-calc-form.component.scss'],
})
export class PermiumCalcFormComponent implements OnInit {
  public premiumForm!: FormGroup;
  public occupationList: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private talApiService: TalApiService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.generateForm();
    this.dobOnChange();
    this.getOccupationList();
    this.onFormStatusChange();
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
          ValidateDOB,
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

  //Auto calculate and set age value on DOB change
  dobOnChange() {
    this.premiumForm.get('dob')?.valueChanges.subscribe((val) => {
      if (!this.premiumForm.get('dob')?.errors) {
        this.premiumForm.patchValue({
          age: this.getAge(val),
        });
      }
    });
  }

  //Calculate age based on DOB
  getAge(dateString: string) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  //Get occupation list to be populated in the dropdown
  getOccupationList() {
    this.talApiService.getOccupationList().subscribe(
      (occupationList) => {
        this.occupationList = occupationList;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  //Set calculated premium amount based on form inputs
  onFormStatusChange() {
    this.premiumForm.statusChanges.subscribe((status: string) => {
      if (status == 'VALID') {
        this.talApiService.calcMonthlyPremium(this.premiumForm.value).subscribe(
          (premium: number) => {
            console.log(premium);
            this.commonService.setPremium(premium);
          },
          (error) => console.log(error.message)
        );
      }
    });
  }
}
