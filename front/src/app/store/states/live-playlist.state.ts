import {LiveMusicData} from "src/app/services/request.service";

export interface LivePlaylistState {
  playlist: LiveMusicData[],
  currentPlay: LiveMusicData,
  history: LiveMusicData[],
}
