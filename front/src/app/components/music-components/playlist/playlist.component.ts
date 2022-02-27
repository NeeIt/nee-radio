import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ICONS} from 'src/app/constants/constants';
import {MusicService} from 'src/app/services/music.service';
import {MusicData} from 'src/app/services/request.service';
import {voteSelector} from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistComponent{
  @Input() playlist: MusicData[];
  // TODO чтоб красивее выглядел текст когда пусто. А то стилей 0
  @Input() emptyText?: string = 'Плейлист пуст';
  vote$ = this.store.select(voteSelector);
  readonly icons = ICONS;

  constructor(
    private store: Store,
    public musicService: MusicService
    ){
  }
}
