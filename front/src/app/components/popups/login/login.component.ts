import {AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICONS} from 'src/app/constants/constants';
import {UserLoginEmailValidation} from 'src/app/validations/user-validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements AfterViewChecked{
  readonly icons = ICONS;
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, UserLoginEmailValidation]),
    password: new FormControl('🎄', [Validators.required])
  });
  showPassword = false;

  constructor(private changeDetectorRef: ChangeDetectorRef){
  }

  toggleShowPasswordState(value: boolean): void{
    this.showPassword = value;
  }

  submit(): void{

  }

  a(a: string): void{
    console.log(this.loginForm);
  }

  ngAfterViewChecked(): void{
    this.changeDetectorRef.detectChanges();
  }
}
