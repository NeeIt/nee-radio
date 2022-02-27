import {createFeatureSelector, createSelector} from "@ngrx/store";
import {NewsState} from "../states/news.state";

export const newsFeatureSelector = createFeatureSelector<NewsState>('news');

export const newsSelector = createSelector(
  newsFeatureSelector,
  state => state.newsList
);
