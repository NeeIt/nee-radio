import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DEFAULT_ARTIST_AVATAR, ICONS} from 'src/app/constants/constants';
import {Artist} from 'src/app/services/request.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistListComponent{
  @Input() list: Artist[];
  @Input() moreLink?: string;
  readonly icons = ICONS;
  readonly defaultArtistAvatar = DEFAULT_ARTIST_AVATAR;

  constructor(){ }
}
