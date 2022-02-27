import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICONS} from 'src/app/constants/constants';
import {Menu} from '../menu.component';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileMenuComponent{
  @Input() menu: Menu[];
  readonly icons = ICONS;

  constructor(){ }
}
