import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent{
  @Input() group = new FormGroup({});
  @Input() title: string;
  @Input() value = '';
  @Input() type = 'text';
  @Input() controlName: string;
  @Input() placeholder = '';
  @Input() leftIcon: string;
  @Input() rightIcon: string;
  @Input() name: string;
  @Output() leftIconClick = new EventEmitter();
  @Output() rightIconClick = new EventEmitter();
  @Output() changeEvent = new EventEmitter<string>();

  constructor(){ }
}
