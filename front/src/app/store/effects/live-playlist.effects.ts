import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {switchMap, withLatestFrom} from 'rxjs/operators';
import {nextLivePlay, setLiveCurrentPlay, setLivePlaylist, setHistory} from '../actions/live-playlist.action';
import {livePlaylistFeatureSelector} from '../selectors/live-playlist.selector';
import {LivePlaylistState} from '../states/live-playlist.state';

@Injectable()
export class LivePlaylistEffects{
  constructor(
    private actions$: Actions,
    private store: Store
    ){

    }

  /** TODO
   * добавлять в историю на next и удалять из плейлиста
   * очищать историю при замене плейлиста
   *  */

  nextLivePlay$ = createEffect(
    () => this.actions$.pipe(
      ofType(nextLivePlay),
      withLatestFrom(this.store.select(livePlaylistFeatureSelector)),
      switchMap(([action, livePlaylistState]: [Action, LivePlaylistState]) => {
        const nextMusic = livePlaylistState.playlist[1];
        this.store.dispatch(setLiveCurrentPlay({currentPlay: nextMusic}));
        this.store.dispatch(setLivePlaylist({livePlaylist: livePlaylistState.playlist.slice(1)}));
        this.store.dispatch(setHistory({history: [livePlaylistState.currentPlay, ...livePlaylistState.history]}));

        return [action, {...this.store}];
      })
    )
    , {dispatch: false}
  );
}
