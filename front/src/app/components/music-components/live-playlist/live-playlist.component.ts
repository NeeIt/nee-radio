import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ICONS} from 'src/app/constants/constants';
import {MusicService} from 'src/app/services/music.service';
import {LiveMusicData} from 'src/app/services/request.service';
import {voteSelector} from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-live-playlist',
  templateUrl: './live-playlist.component.html',
  styleUrls: ['./live-playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivePlaylistComponent{
  @Input() playlist: LiveMusicData[];
  @Input() currentElement: LiveMusicData;
  vote$ = this.store.select(voteSelector);
  readonly icons = ICONS;

  constructor(
    private store: Store,
    public musicService: MusicService
    ){
  }
}
