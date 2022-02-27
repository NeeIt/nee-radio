import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {DEFAULT_ALBUM_COVER, ICONS} from 'src/app/constants/constants';
import {MusicService} from 'src/app/services/music.service';
import {MusicData} from 'src/app/services/request.service';
import {musicTimeLeftSelector} from 'src/app/store/selectors/app.selector';

@Component({
  selector: 'app-play-cover',
  templateUrl: './play-cover.component.html',
  styleUrls: ['./play-cover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayCoverComponent{
  @Input() music: MusicData;
  readonly defaultAlbumCover = DEFAULT_ALBUM_COVER;
  readonly icons = ICONS;
  musicTimeLeft$ = this.store.select(musicTimeLeftSelector);

  constructor(
    private store: Store,
    public musicService: MusicService
    ){
  }
  ngAfterViewChecked(){
  }
}
