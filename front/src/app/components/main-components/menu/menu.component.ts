import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ICONS} from 'src/app/constants/constants';
import {PermissionService} from 'src/app/permission/permission.service';

export interface Menu {
  path: string;
  iconClass?: string;
  text?: string;
  permission: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent{
  menu: Menu[] = [
    {
      path: '/home',
      iconClass: ICONS.HOME_PAGE,
      text: 'Главная',
      permission: 'homePage'
    },
    {
      path: '/profile',
      iconClass: ICONS.PROFILE_PAGE,
      text: 'Профиль',
      permission: 'profilePage'
    },
    {
      path: '/login',
      iconClass: ICONS.PROFILE_PAGE,
      text: 'Войти',
      permission: 'loginPage'
    },
    {
      path: '/chat',
      iconClass: ICONS.CHAT_PAGE,
      text: 'Чат',
      permission: 'chatPage'
    }
  ];

  constructor(private permissionService: PermissionService){
    this.menu = this.menu.filter(element => permissionService.hasPermission(element.permission));
  }
}
