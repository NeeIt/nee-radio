export interface BackgroundPattern{
  title: string;
  img: string;
}

export interface AppState {
  backgroundPatternList: BackgroundPattern[],
  minimalizeCurrentPlay: boolean,
  isMenuCompressed: boolean,
  musicPlayState: boolean,
  musicVolume: number,
  musicTimeLeft: number
}
