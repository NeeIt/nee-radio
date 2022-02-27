import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {AppState} from '../states/app.state';
import {LivePlaylistState} from '../states/live-playlist.state';
import {NewsState} from '../states/news.state';
import {UserState} from '../states/user.state';
import {AppReducer} from './app.reducer';
import {LivePlaylistReducer} from './live-playlist.reducer';
import {NewsReducer} from './news.reducer';
import {UserReducer} from './user.reducer';

export interface StoreState {
  livePlaylist: LivePlaylistState,
  user: UserState,
  app: AppState,
  news: NewsState
}

export const reducers: ActionReducerMap<StoreState> = {
  livePlaylist: LivePlaylistReducer,
  user: UserReducer,
  app: AppReducer,
  news: NewsReducer
  };


export const metaReducers: MetaReducer<StoreState>[] = !environment.production
? []
: [];
