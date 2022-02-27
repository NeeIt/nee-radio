import {createReducer, on} from "@ngrx/store";
import {playMusic, setMinimalizeCurrentPlay, setMusicVolume, pauseMusic, setMusicTimeLeft, setMenuCompressed} from "../actions/app.action";
import {AppState} from "../states/app.state";

// TODO цветовые схемы и настройки фона
export const initialState: AppState = {
  backgroundPatternList: [{
    title: 'Классический',
    img: ''
  }],
  minimalizeCurrentPlay: false,
  // TODO реализовать сокрытие меню на десктопе
  isMenuCompressed: Boolean(localStorage.getItem('nee_is_menu_compressed')),
  musicPlayState: false,
  musicVolume: +localStorage.getItem('nee_music_volume') || 50,
  musicTimeLeft: 0
};

export const AppReducer = createReducer(
  initialState,
  on(setMinimalizeCurrentPlay, (state, action) => ({...state, minimalizeCurrentPlay: action.minimalizeCurrentPlay})),
  on(playMusic, (state) => ({...state, musicPlayState: true})),
  on(pauseMusic, (state) => ({...state, musicPlayState: false})),
  on(setMusicVolume, (state, action) => {
    localStorage.setItem('nee_music_volume', action.musicVolume.toString());

    return {
      ...state,
      musicVolume:
        action.musicVolume > 100
        ? 100
        : action.musicVolume < 0
        ? 0
        : action.musicVolume
      };
    }),
    on(setMenuCompressed, (state, action) => {
      if (localStorage.getItem('nee_is_menu_compressed')){
        localStorage.removeItem('nee_is_menu_compressed');
      } else {
        localStorage.setItem('nee_is_menu_compressed', 'Y');
      }

      return {
        ...state,
        isMenuCompressed: action.isMenuCompressed
      };
    }),
   on(setMusicTimeLeft, (state, action) => ({...state, musicTimeLeft: action.time}))
);
