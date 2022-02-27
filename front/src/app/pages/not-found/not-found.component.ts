import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NOT_FOUND_IMAGE} from 'src/app/constants/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent{
  readonly notFoundImage = NOT_FOUND_IMAGE;
  constructor(){ }
}
