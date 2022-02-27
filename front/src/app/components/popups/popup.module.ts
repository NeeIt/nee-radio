import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponentsModule} from '../inputs/inputs.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PopupTemplateComponent} from './popup-template/popup-template.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PopupTemplateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    InputComponentsModule,
    ReactiveFormsModule
  ]
})
export class PopupModule{ }
