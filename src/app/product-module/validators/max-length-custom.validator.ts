import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function maxLengthCustomValidator(maxLength: number): ValidatorFn {

    function maxLengthCustom(control: AbstractControl): ValidationErrors | null {
        return control.value && control.value.length > maxLength ? {maxLengthField: true} : null
    }

    return maxLengthCustom
}