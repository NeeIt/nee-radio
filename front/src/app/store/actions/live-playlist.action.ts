import {createAction, props} from "@ngrx/store";
import {LiveMusicData} from "src/app/services/request.service";

export const setLivePlaylist = createAction('[LIVE-PLAYLIST] setList', props<{livePlaylist: LiveMusicData[]}>());
export const setLiveCurrentPlay = createAction('[LIVE-PLAYLIST] setMusic', props<{currentPlay: LiveMusicData}>());
export const nextLivePlay = createAction('[LIVE-PLAYLIST] next');
export const setHistory = createAction('[LIVE-PLAYLIST] setHistory', props<{history: LiveMusicData[]}>());
export const clearLiveHistory = createAction('[LIVE-PLAYLIST] clearHistory');
