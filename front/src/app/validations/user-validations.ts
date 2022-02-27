import {AbstractControl, ValidationErrors} from "@angular/forms";
import {VALIDATION} from "../constants/validations";

export function UserLoginEmailValidation(control: AbstractControl): ValidationErrors | null{
    const isEmail = control.value.indexOf('@') !== -1;

    if (isEmail){
        if (control.value.length > VALIDATION.EMAIL_MAX_LENGTH){
            return {isEmail: true, invalidLength: true};
          }
    } else {
        if (control.value.length > VALIDATION.USER_LOGIN_MAX_LENGTH){
            return {isEmail: false, invalidLength: true};
        } else if (control.value.length < VALIDATION.USER_LOGIN_MIN_LENGTH){
            return {isEmail: false, invalidLength: true};
        }
    }

    return null;
}