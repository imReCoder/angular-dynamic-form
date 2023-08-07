import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { DYNAMIC_FORM_DATA } from '../data/forms';
import { FormOption, IValidators } from '../interfaces/dynamic-form.interface';
import { MatSelectChange } from '@angular/material/select';
import { convertNestedKeys } from '../utils';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  options = [
    { value: 'createVm', label: 'Create VM' },
    { value: 'createStorage', label: 'Create Storage' },
  ];

  selectedOption: string = 'createVm';
  form: FormGroup;
  currentFormFields: FormOption = DYNAMIC_FORM_DATA[0];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      componentType: [this.selectedOption],
    });
    this.updateFormFields();
  }

  private updateFormFields(): void {
    Object.keys(this.form.controls).forEach((controlName) => {
      if (controlName !== 'componentType') {
        this.form.removeControl(controlName);
      }
    });

    this.currentFormFields.fields.forEach((field) => {
      console.log('adding control for field: ', field.name);
      const validators = this.getValidators(field.validators);

      if (field.type === 'multiple') {
        this.form.addControl(
          field.name,
          this.fb.array(
            [this.fb.control('', validators)],
            [Validators.maxLength(2)]
          )
        );
      } else {
        this.form.addControl(
          field.name,
          this.fb.control(field.defaultValue, validators)
        );
      }
    });
  }

  onOptionSelected(change: MatSelectChange): void {
    console.log('option selected: ', change);
    this.selectedOption = change.value;
    this.currentFormFields = DYNAMIC_FORM_DATA.find(
      (data: FormOption) => data.value === this.selectedOption
    ) as FormOption;
    this.updateFormFields();
  }

  getMultipleFieldValue(fieldName: string): FormArray {
    return this.form.get(fieldName) as FormArray;
  }

  addMultipleValueField(fieldName: string): void {
    const control = this.form.get(fieldName) as FormArray;
    const validatorsName = this.currentFormFields.fields.find(
      (f) => f.name == fieldName
    )?.validators;
    const validators = this.getValidators(validatorsName);
    control.push(this.fb.control('', validators));
  }

  removeMultipleValueField(fieldName: string, index: number): void {
    const control = this.form.get(fieldName) as FormArray;
    if (control.length > 1) {
      control.removeAt(index);
    }
  }

  public fieldError(
    controlName: string,
    errorName: string,
    arrayControl?: AbstractControl
  ) {
    if (arrayControl) {
      return arrayControl.hasError(errorName);
    }
    return this.form.controls[controlName].hasError(errorName);
  }

  submitForm() {
    if (!this.form.valid) return;
    const data = this.form.getRawValue();
    const outputJson = convertNestedKeys(data);
    console.log('For data ', outputJson);
  }

  private getValidators(validatorsNames: IValidators = {}): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    const validatorKeys = Object.keys(validatorsNames || {});
    validatorKeys.forEach((validationName: string) => {
      switch (validationName) {
        case 'required':
          validators.push(Validators.required);
          break;
        case 'minlength':
          validators.push(
            Validators.minLength(validatorsNames?.['minlength'] as number)
          );
          break;
        case 'maxlength':
          validators.push(
            Validators.maxLength(validatorsNames?.['maxlength'] as number)
          );
          break;
        case 'min':
          validators.push(Validators.min(validatorsNames?.['min'] as number));
          break;
        case 'max':
          validators.push(Validators.max(validatorsNames?.['max'] as number));
          break;
        case 'email':
          validators.push(Validators.email);
      }
    });

    return validators;
  }
}
