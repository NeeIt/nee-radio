import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export interface MusicData {
  id: number,
  title: string;
  album?: string;
  artist: string;
  file: string;
  cover?: string;
  tags?: string[];
  time: number;
}

export type LiveMusicData = MusicData & {
  orderUserId: number,
  orderUserName: string,
  orderMessage?: string,
  orderDate: number,
  votes: number;
}

export interface Playlist {
  id: number,
  title: string;
  author: string;
  list: MusicData[];
  cover?: string;
}

export interface User{
  id: number,
  login: string;
  name: string;
  playlists: Playlist[];
  avatar?: string;
}

export interface Artist{
  id: number,
  name: string;
  avatar?: string;
  songCount?: number;
}

export interface Album{
  id: number,
  title: string;
  createDate: string;
  cover: string;
  artist: Artist[]
  list: MusicData[]
}

@Injectable({providedIn: 'root'})
export class RequestService{
  constructor(private httpClient: HttpClient){ }

  getPlayList$(): Subject<Playlist>{
    return new Subject<Playlist>();
  }

  getArtist$(): Subject<Artist>{
    return new Subject<Artist>();
  }

  getUser$(): Subject<User>{
    return new Subject<User>();
  }

  getAlbum$(): Subject<Album>{
    return new Subject<Album>();
  }
}
