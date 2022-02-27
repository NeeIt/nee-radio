import {createAction, props} from "@ngrx/store";
import {MusicData} from "src/app/services/request.service";


export const changeLikeState = createAction('[USER] changeLikeState', props<{music: MusicData}>());
export const setVote = createAction('[USER] setVote', props<{music: MusicData}>());
export const resetVote = createAction('[USER] resetVote');
