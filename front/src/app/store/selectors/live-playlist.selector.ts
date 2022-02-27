import {createFeatureSelector, createSelector} from "@ngrx/store";
import {LivePlaylistState} from "../states/live-playlist.state";

export const livePlaylistFeatureSelector = createFeatureSelector<LivePlaylistState>('livePlaylist');

export const livePlaylistSelector = createSelector(
  livePlaylistFeatureSelector,
  state => state.playlist
);
export const liveCurrentPlaySelector = createSelector(
  livePlaylistFeatureSelector,
  state => state.currentPlay
);

export const liveHistorySelector = createSelector(
  livePlaylistFeatureSelector,
  state => state.history
);
