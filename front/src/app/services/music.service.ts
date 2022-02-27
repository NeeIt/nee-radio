import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {pauseMusic, playMusic, setMusicTimeLeft, setMusicVolume} from '../store/actions/app.action';
import {nextLivePlay} from '../store/actions/live-playlist.action';
import {changeLikeState, resetVote, setVote} from '../store/actions/user.action';
import {musicPlayStateSelector, musicVolumeSelector} from '../store/selectors/app.selector';
import {liveCurrentPlaySelector} from '../store/selectors/live-playlist.selector';
import {likedSelector} from '../store/selectors/user.selector';
import {MusicData} from './request.service';

@Injectable({providedIn: 'root'})
export class MusicService{
  audio;
  likedPlaylist: MusicData[];

  constructor(private store: Store){
    this.store.select(likedSelector).subscribe(playlist => {
      this.likedPlaylist = playlist.list;
    });

    this.audio = new Audio();

    this.audio.onended = () => {
      store.dispatch(nextLivePlay());
    };

    // примерно каждую секунду будем отсылать сколько осталось времени у трека
    setInterval(() => {
      this.store.dispatch(setMusicTimeLeft(
        {time: Math.floor((this.audio.duration - this.audio.currentTime) * 1000)}
        ));
    }, 900);

    store.select(liveCurrentPlaySelector).subscribe(music => {
      this.audio.src = music.file;
      this.audio.load();
      this.audio.play().then(
        () => {
        },
        (error) => {
          console.log(error);
        }
      );
    });

    store.select(musicPlayStateSelector).subscribe(state => {
      if (state === true){
        this.audio.play();
      } else if (state === false){
        this.audio.pause();
      }
    });

    store.select(musicVolumeSelector).subscribe(volume => {
      this.audio.volume = volume / 100;
      }
    );
  }

  hasLike(music: MusicData): boolean{
    return Boolean(this.likedPlaylist.find(el => el.id === music.id));
  }

  changeLikeState(music: MusicData): void{
    this.store.dispatch(changeLikeState({music}));
  }

  //TODO перед релизом или выпилить или с правами поебацо, чтоб кто угодно не мог контролить
  nextMusic(): void{
    this.store.dispatch(nextLivePlay());
  }

  setVote(music: MusicData): void{
    this.store.dispatch(setVote({music}));
  }

  resetVote(): void{
    this.store.dispatch(resetVote());
  }

  play(): void{
    this.store.dispatch(playMusic());
  }

  pause(): void{
    this.store.dispatch(pauseMusic());
  }

  setVolume(musicVolume: number): void{
    this.store.dispatch(setMusicVolume({musicVolume}));
  }
}
