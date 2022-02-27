import {ChangeDetectionStrategy, Component} from '@angular/core';
import {COPYRIGHT_TEXT, EMAIL, SOCIALS, SITE_DESCRIPTION} from 'src/app/constants/constants';

interface Page{
  link: string;
  title: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent{
  readonly socials = SOCIALS;
  readonly copyrightText = COPYRIGHT_TEXT;
  readonly email = EMAIL;
  readonly siteDescription = SITE_DESCRIPTION;

  pages: Page[] = [
    {link: '/home', title: 'Домашняя'},
    {link: '/profile', title: 'Профиль'},
    {link: '/chat', title: 'Чат'},
    {link: '/login', title: 'Авторизация'},
    {link: '/', title: 'Для правообладателей музыки'}
  ];

  constructor(){ }
}
