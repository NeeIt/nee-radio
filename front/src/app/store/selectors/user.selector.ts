import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "../states/user.state";

export const userFeatureSelector = createFeatureSelector<UserState>('user');

export const favArtistsSelector = createSelector(
  userFeatureSelector,
  state => state.favArtists
);

export const customSettingsSelector = createSelector(
  userFeatureSelector,
  state => state.customSettings
);

export const voteSelector = createSelector(
  userFeatureSelector,
  state => state.vote
);

export const likedSelector = createSelector(
  userFeatureSelector,
  state => state.liked
);

export const roleSelector = createSelector(
  userFeatureSelector,
  state => state.role
);

export const groupsSelector = createSelector(
  userFeatureSelector,
  state => state.groupList
);
