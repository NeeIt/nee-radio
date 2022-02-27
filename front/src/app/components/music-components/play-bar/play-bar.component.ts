import {ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {DEFAULT_ALBUM_COVER, ICONS} from 'src/app/constants/constants';
import {MusicService} from 'src/app/services/music.service';
import {LiveMusicData} from 'src/app/services/request.service';
import {minimalizeCurrentPlaySelector, musicPlayStateSelector, musicVolumeSelector} from 'src/app/store/selectors/app.selector';
import {liveCurrentPlaySelector} from 'src/app/store/selectors/live-playlist.selector';

@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayBarComponent{
  @ViewChild('volumeMobileContainer') volumeMobileContainer: ElementRef;
  @ViewChild('volumeMobileButton') volumeMobileButton: ElementRef;
  readonly icons = ICONS;
  readonly defaultAlbumCover = DEFAULT_ALBUM_COVER;
  isShowedMobileVolume = false;
  currentPlay: LiveMusicData;
  playState = false;
  minimalizeCurrentPlay = false;
  minimalizeCurrentPlay$ = this.store.select(minimalizeCurrentPlaySelector)
    .subscribe(value => this.minimalizeCurrentPlay = value);
  musicVolume$ = this.store.select(musicVolumeSelector);

  @HostListener('document:click', ['$event'])
  clickout(event: Event): void{
    // Если клик идет по кнопке открытия/закрытия мобильного инпута, то игнорим этот обработчик события
    // дадим сработать собитию в самой кнопке
    if (this.volumeMobileButton.nativeElement.contains(event.target)) return;

    if (!this.volumeMobileContainer.nativeElement.contains(event.target) && this.isShowedMobileVolume){
      this.isShowedMobileVolume = false;
      event.preventDefault();
    } else if (this.volumeMobileContainer.nativeElement.contains(event.target) && !this.isShowedMobileVolume){
      this.isShowedMobileVolume = true;
    }
  }

  constructor(
    private store: Store,
    public musicService: MusicService
    ){
      store.select(liveCurrentPlaySelector).subscribe(music => this.currentPlay = music);
      store.select(musicPlayStateSelector).subscribe(state => this.playState = state);
    }
}
