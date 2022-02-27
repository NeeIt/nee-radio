import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent{
  @Input() icon?: string;
  @Input() color?: string;
  @Input() route?: string;
  @Input() noBorder?: boolean;
  @Input() noPadding?: boolean;
  @Input() tooltip?: string;
  @Input() disabled = false;
  @Output() clickEvent = new EventEmitter<MouseEvent>();

  constructor(public router: Router){ }

  click(event: MouseEvent): void{
    if (this.disabled) return;
    if (this.route){
      this.router.navigateByUrl(this.route);
    }
    this.clickEvent.emit(event);
  }
}
