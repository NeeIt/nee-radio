import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {groupsSelector, roleSelector} from '../store/selectors/user.selector';
import {Group, Role} from '../store/states/user.state';

@Injectable({providedIn: 'root'})
export class PermissionService{
  // Todo объекты приходят с сервера
  testComponents: {[key: number]: string[]} = {
  [Role.guest]: [
    'rightPanel_login',
    'home_login'
  ],
  [Role.user]: [
    'rightPanel_favArtists',
    'playbar_like',
    'livePlaylist_actions',
    'livePlaylist_vote',
    'livePlaylist_like',
    'profilePage',
    'chatPage',
    'playCover_like',
    'home_favArtists'
    ]
  }

  testAllComponents: string[] = [
    'header',
    'footer',
    'menu',
    'leftMenu',
    'mobileMenu',
    'footer_contacts',
    'scrollToTop',
    'rightPanel',
    'playbar',
    'playbar_musicInfo',
    'playbar_artistInfo',
    'playbar_playButton',
    'playbar_volume',
    'playbar_cover',
    'playbar_runLine',
    'livePlaylist',
    'livePlaylist_orderUserName',
    'homePage',
    'home_news',
    'home_mobile',
    'home_currentPlay',
    'home_livePlaylist',
    'home_history',
    'livePlaylist_easter',
    'header_actions',
    'header_search'
  ];

  role: Role;
  role$ = this.store.select(roleSelector).subscribe(role => this.role = role);
  groupList: Group[];
  groupList$ = this.store.select(groupsSelector).subscribe(groupList => this.groupList = groupList);

  constructor(private store: Store){ }

  hasPermission(name: string): boolean{
    return this.testComponents[this.role].includes(name) || this.testAllComponents.includes(name);
  }

  isGuest(): boolean{
    return this.role === Role.guest;
  }

  isUser(): boolean{
    return this.role === Role.user;
  }
}
