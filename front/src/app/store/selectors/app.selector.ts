import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../states/app.state";

export const appFeatureSelector = createFeatureSelector<AppState>('app');

export const backgroundPatternListSelector = createSelector(
  appFeatureSelector,
  state => state.backgroundPatternList
);

export const minimalizeCurrentPlaySelector = createSelector(
  appFeatureSelector,
  state => state.minimalizeCurrentPlay
);

export const isMenuCompressedSelector = createSelector(
  appFeatureSelector,
  state => state.isMenuCompressed
);

export const musicPlayStateSelector = createSelector(
  appFeatureSelector,
  state => state.musicPlayState
);
// TODO задержка для того, чтобы не спамили (и на других подобных тоже)
export const musicVolumeSelector = createSelector(
  appFeatureSelector,
  state => state.musicVolume
);

export const musicTimeLeftSelector = createSelector(
  appFeatureSelector,
  state => state.musicTimeLeft
);
