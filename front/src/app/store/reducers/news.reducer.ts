import {createReducer} from "@ngrx/store";
import {NewsState} from "../states/news.state";


export const initialState: NewsState = {
  newsList: [
    {
      title: 'Добавлен новый альбом EastNewSound',
      path: '/home',
      cover: 'https://i1.sndcdn.com/visuals-000239869762-wOJrbN-original.jpg'
    },
    {
      title: 'Открыты заявки в модерацию Nee-Radio',
      path: '/home',
      cover: 'https://i.ytimg.com/vi/dN7YjfeXDak/maxresdefault.jpg'
    }]
};

export const NewsReducer = createReducer(
  initialState
);
