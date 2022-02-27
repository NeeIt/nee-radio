import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ICONS} from 'src/app/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent{
  readonly icons = ICONS;
  constructor(){
  }
}
