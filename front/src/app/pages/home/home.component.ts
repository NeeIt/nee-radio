import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {liveCurrentPlaySelector} from 'src/app/store/selectors/live-playlist.selector';
import {favArtistsSelector} from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent{
  currentPlay$ = this.store.select(liveCurrentPlaySelector);

  favArtists$ = this.store.select(favArtistsSelector);

  constructor(private store: Store){
  }
}
