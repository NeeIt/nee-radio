import {createReducer, on} from "@ngrx/store";
import {changeLikeState, resetVote, setVote} from "../actions/user.action";
import {Role, UserState} from "../states/user.state";

export const initialState: UserState = {
role: Role.guest,
groupList: [],
favArtists: [{
    id: 1,
    name: 'EastNewSound',
    songCount: 100,
    avatar: 'https://i1.sndcdn.com/avatars-000612143802-m54nwl-t500x500.jpg'
  },
  {
    id: 2,
    name: 'LiSA',
    songCount: 33,
    avatar: 'https://static.wikia.nocookie.net/hiroyuki-sawano/images/9/99/LiSA_Vocalist.jpg'
  },
  {
    id: 3,
    name: 'Malcolm Robinson',
    songCount: 64,
    avatar: 'https://i1.sndcdn.com/artworks-000162202530-pxmwaj-t500x500.jpg'
  },
  {
    id: 4,
    name: 'LupaDance',
    songCount: 13
  }],
  customSettings: {
    backgroundPattrn: {
      img: 'assets/img/backgroundPattern.jpg',
      title: 'Классический'
    }
  },
  vote: null,
  liked: {
    id: 333,
    title: 'Nee favourite',
    author: 'NeeProgram',
    list: []
  }
};

export const UserReducer = createReducer(
  initialState,

  on(changeLikeState, (state, action) => {
    let bufferArray = state.liked.list;
    if (bufferArray.find(music => music.id === action.music.id)){
      bufferArray = bufferArray.filter(music => music.id !== action.music.id);
    } else {
      bufferArray = [action.music, ...bufferArray];
    }

    return {
      ...state, liked: {
        ...state.liked,
        list: bufferArray
      }
    };
  }),

  on(setVote, (state, action) => {
    // TODO сделать проверку на наличие песни в лайв листе, чтобы не голосовать за то, чего нет
    // TODO связать и менять количество голосов в песнях
    if (state.vote?.id === action.music.id) return state;

    return {...state, vote: action.music};
  }),
    // TODO связать и менять количество голосов в песнях
  on(resetVote, (state) => ({...state, vote: null}))
);
