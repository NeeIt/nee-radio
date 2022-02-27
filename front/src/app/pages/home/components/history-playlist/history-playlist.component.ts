import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {liveHistorySelector} from 'src/app/store/selectors/live-playlist.selector';

@Component({
  selector: 'app-history-playlist-block',
  templateUrl: './history-playlist.component.html',
  styleUrls: ['./history-playlist.component.scss']
})
export class HistoryPlaylistComponent{
  historyPlaylist$ = this.store.select(liveHistorySelector);

  constructor(public store: Store){ }
}
