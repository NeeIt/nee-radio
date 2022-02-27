import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginBlockComponent} from './login-block/login-block.component';
import {InputComponentsModule} from '../inputs/inputs.module';


@NgModule({
  declarations: [
    LoginBlockComponent
  ],
  imports: [
    CommonModule,
    InputComponentsModule
  ],
  exports: [
    LoginBlockComponent
  ]
})
export class BlocksModule{ }
