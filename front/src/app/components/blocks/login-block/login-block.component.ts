import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PopupService} from 'src/app/services/popup.service';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginBlockComponent{
  constructor(public popupService: PopupService){ }
}
