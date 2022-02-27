import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {COPYRIGHT_TEXT, EMAIL, ICONS, SOCIALS} from 'src/app/constants/constants';
import {setMenuCompressed} from 'src/app/store/actions/app.action';
import {isMenuCompressedSelector} from 'src/app/store/selectors/app.selector';
import {Menu} from '../menu.component';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftMenuComponent{
  readonly email = EMAIL;
  readonly socials = SOCIALS;
  readonly copyrightText = COPYRIGHT_TEXT;
  readonly icons = ICONS;
  isMenuCompressed = false;
  isMenuCompressed$ = this.store.select(isMenuCompressedSelector).subscribe((isCompressed) => {
      this.isMenuCompressed = isCompressed;
    }
  );
  @Input() menu: Menu[];

  constructor(public store: Store){
  }

  changeMenuState(): void{
    this.store.dispatch(setMenuCompressed({isMenuCompressed: !this.isMenuCompressed}));
  }
}
