import {createAction, props} from "@ngrx/store";

export const setMinimalizeCurrentPlay = createAction('[APP] setMinimalizeCurrentPlay', props<{minimalizeCurrentPlay: boolean}>());
export const playMusic = createAction('[APP] playMusic');
export const pauseMusic = createAction('[APP] pauseMusic');
export const setMenuCompressed = createAction('[APP] isMenuCompressed', props<{isMenuCompressed: boolean}>());
export const setMusicVolume = createAction('[APP] setVolume', props<{musicVolume: number}>());
export const setMusicTimeLeft = createAction('[APP] setMusicTimeLeft', props<{time: number}>());
