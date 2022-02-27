import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from './tooltip.directive';
import {RunLineDirective} from './run-line.directive';


@NgModule({
  declarations: [
    TooltipDirective,
    RunLineDirective
    ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipDirective,
    RunLineDirective
    ]
})
export class DirectiveModule{ }
