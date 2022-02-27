import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {liveCurrentPlaySelector, livePlaylistSelector} from 'src/app/store/selectors/live-playlist.selector';

@Component({
  selector: 'app-live-playlist-block',
  templateUrl: './live-playlist.component.html',
  styleUrls: ['./live-playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivePlaylistComponent{
  livePlaylist$ = this.store.select(livePlaylistSelector);
  liveCurrentPlay$ = this.store.select(liveCurrentPlaySelector);

  constructor(public store: Store){
   }
}
