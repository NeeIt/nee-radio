import {createReducer, on} from "@ngrx/store";
import {LiveMusicData} from "src/app/services/request.service";
import {setHistory, setLiveCurrentPlay, setLivePlaylist} from "../actions/live-playlist.action";
import {LivePlaylistState} from "../states/live-playlist.state";

const testData: LiveMusicData[] = [];

for (let i = 5; i < 100; i++){
  testData.push({
    id: i,
    title: 'title',
    file: '',
    artist: 'test',
    time: 0,
    votes: 1,
    orderDate: 1638049000000,
    orderMessage: 'testMessage',
    orderUserId: 0,
    orderUserName: 'NeeTest'
  });
}

export const initialState: LivePlaylistState = {
  playlist: [
    {
      id: 1,
      title: 'Corridors of Timed ad assd sadasdsad ',
      artist: 'tata777',
      file: 'assets/testFiles/Corridors of Time.mp3',
      album: 'calm music',
      cover: 'assets/testFiles/corridors of time.png',
      time: 150000,
      tags: [],
      votes: 1,
      orderDate: 1638049000000,
      orderMessage: 'testMessage',
      orderUserId: 0,
      orderUserName: 'NeeTest'
    },
    {
      id: 2,
      title: 'Secret of the forest',
      artist: 'tata777',
      file: 'assets/testFiles/Secret of the Forest.mp3',
      album: 'calm music',
      cover: 'assets/testFiles/secret of the forest.jpg',
      tags: [],
      time: 180000,
      votes: 1,
      orderDate: 1638049000000,
      orderMessage: 'testMessage',
      orderUserId: 0,
      orderUserName: 'NeeTest'
    },
    {
      id: 3,
      title: 'Windscene',
      artist: 'tata777',
      file: 'assets/testFiles/Wind Scene.mp3',
      album: 'calm music',
      cover: 'assets/testFiles/wind scene.png',
      tags: [],
      time: 170000,
      votes: 3,
      orderDate: 1638049000000,
      orderMessage: 'testMessage',
      orderUserId: 0,
      orderUserName: 'NeeTest'
    },
    {
      id: 4,
      title: 'Папа псих',
      artist: 'букины',
      file: 'assets/testFiles/rickroll.mp3',
      album: 'Счастливы вместе',
      cover: 'assets/testFiles/rickroll.jpg',
      tags: [],
      time: 170000,
      votes: 3,
      orderDate: 1638049000000,
      orderMessage: 'testMessage',
      orderUserId: 0,
      orderUserName: 'NeeTest'
    },
    ...testData
  ],
  currentPlay: {
    id: 1,
    title: 'Corridors of Timed ad assd sadasdsad ',
    artist: 'tata777',
    file: 'assets/testFiles/Corridors of Time.mp3',
    album: 'calm music',
    cover: 'assets/testFiles/corridors of time.png',
    time: 150000,
    tags: [],
    votes: 1,
    orderDate: 1638049000000,
    orderMessage: 'testMessage',
    orderUserId: 0,
    orderUserName: 'NeeTest'
  },
  history: [
  ]
};

export const LivePlaylistReducer = createReducer(
  initialState,
  on(setLivePlaylist, (state, action) => ({...state, playlist: action.livePlaylist})),
  on(setLiveCurrentPlay, (state, action) => ({...state, currentPlay: action.currentPlay})),
  on(setHistory, (state, action) => ({...state, history: action.history}))
  );
