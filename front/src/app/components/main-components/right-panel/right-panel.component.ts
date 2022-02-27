import {ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {DEFAULT_ALBUM_COVER} from 'src/app/constants/constants';
import {ScrollService} from 'src/app/services/scroll.service';
import {setMinimalizeCurrentPlay} from 'src/app/store/actions/app.action';
import {minimalizeCurrentPlaySelector} from 'src/app/store/selectors/app.selector';
import {liveCurrentPlaySelector, livePlaylistSelector} from 'src/app/store/selectors/live-playlist.selector';
import {favArtistsSelector} from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightPanelComponent{
  @ViewChild('currentPlay') currentPlay: ElementRef;
  @ViewChild('aside') aside: ElementRef;
  readonly defaultAlbumCover = DEFAULT_ALBUM_COVER;
  currentPlay$ = this.store.select(liveCurrentPlaySelector);
  favArtists$ = this.store.select(favArtistsSelector);
  livePlaylist$ = this.store.select(livePlaylistSelector);
  minimalizeCurrentPlay = false;

  // Проверка на то находится ли на экране инфа о текущем треке.
  // Если нет, то перекидываем его в плейбар
  @HostListener("window:scroll", []) onWindowScroll(): void{
    const isCurrentPlayVisible = this.scrollService.isVisible(this.currentPlay);

     if (isCurrentPlayVisible && this.minimalizeCurrentPlay){
      this.store.dispatch(setMinimalizeCurrentPlay({minimalizeCurrentPlay: false}));
    } else if (!isCurrentPlayVisible && !this.minimalizeCurrentPlay){
      this.store.dispatch(setMinimalizeCurrentPlay({minimalizeCurrentPlay: true}));
    }
  }

  constructor(
    public store: Store,
    private scrollService: ScrollService
    ){
      this.store.select(minimalizeCurrentPlaySelector)
      .subscribe(state => this.minimalizeCurrentPlay = state);
    }
}
