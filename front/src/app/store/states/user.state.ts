import {Artist, MusicData, Playlist} from "src/app/services/request.service";
import {BackgroundPattern} from "./app.state";

export enum Role{
  guest = 0,
  user = 1,
  donut = 2,
  moder = 3,
  admin = 4
}

export enum Group{
  // Бан на прослушку музыки
  listenBan = 0,
  // Бан на общение в чате
  chatBan = 1,
  // Бан на загрузку музыки
  uploadBan = 2,
  // Бан на заказ песен
  orderBan = 3,
  // Разрешение публиковать новости
  newsCreator = 4,
  // Отключение проверки модерацией (для самой модерации)
  withoutModeration = 5,
  // Полный спектр возможностей в чате (чтение лс, бан и тп)
  chatGodMode = 6,
  // Полный спектр возможностей в плейлисте проигрывания (удаление из очереди, мгновенное поднятие в очереди)
  livePlayGodMode = 7,
  // Полный спектр возможностей в отношении пользователей (изменение профиля)
  userGodMode = 8,
  // Полный спектр возможностей в библиотеке (изменение наименований треков, альбомов, авторов, замена уже загруженной музыки),
  libraryGodMode = 9
}

export interface CustomSettings {
  backgroundPattrn: BackgroundPattern,
}

export interface UserState {
  role: Role,
  groupList: Group[]
  favArtists: Artist[],
  customSettings: CustomSettings,
  vote: MusicData,
  liked: Playlist,
}
