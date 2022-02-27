import {DateService} from "../services/date.service";

export const DEFAULT_ARTIST_AVATAR = 'assets/img/defaultArtist.png';

export const DEFAULT_ALBUM_COVER = 'assets/img/defaultCover.jpg';

export const DEFAULT_NEWS_COVER = 'assets/img/defaultCover.jpg';

export const LOGIN_IMAGE = 'assets/img/authorizationImg.jpg';

export const NOT_FOUND_IMAGE = 'assets/img/notFound.png';

export const EMAIL = 'VladViklund@gmail.com';

export const COPYRIGHT_TEXT = `© В.С.Ушманкин 2021-${new Date().getFullYear()}`;

export const SOCIALS = {
  VK: 'https://vk.com/nee_radio',
  TWITTER: '/',
  DISCORD: '/'
};

export const WINDOW_BREAK_POINTS = {
  TABLE: 1200,
  SMALL_TABLE: 900,
  MOBILE: 767,
  SMALL_MOBILE: 570
};

export const SITE_DESCRIPTION = 'NeeRadio - проект несущий развликательный характер. Здесь каждый может заказать и прослушать песню, а так же загрузить собственную. Дополнительно сайт включает в себя чат, в котором слушатели могут общаться';

export const IS_WEEKENDS = {
  XMAS: DateService.isInterval('12-15', '12-32') || DateService.isInterval('1-1', '1-11'),
  HALOWEEN: DateService.isInterval('10-25', '11-7'),
  MAY9: DateService.isToday('05-09'),
  SEPTEMBER1: DateService.isToday('08-01'),
  EASTER_PRAV: DateService.isToday('2022-04-24', '2023-04-16', '2024-05-05', '2025-04-20'),
  EASTER_KATOL: DateService.isToday('2022-04-17', '2023-04-09', '2024-03-31', '2025-04-20'),
  LUPA_BIRTHDAY: DateService.isToday('12-14'),
  NEE_BIRTHDAY: DateService.isToday('01-04'),
  NEE_RADIO_RELEASE: DateService.isToday('04-01')
};

// Размеры аналогичные css. При смене тут менять и в css
export const JS_MEDIA_SIZES: {[key: string]: [number, number]} = {
  DESKTOP: [1200, null],
  TABLE: [900, 1200],
  SMALL_TABLE: [767, 900],
  MOBILE: [570, 767],
  SMALL_MOBILE: [320, 570],
  BREAK_MOBILE: [0, 320]
};

//     table:        1200px,
//     smallTable:   900px,
//     mobile:       767px,
//     smallMobile:  570px,

// ----------------- Определение праздничной иконки VOTED -----------------
let votedIco = 'fas fa-minus';

switch (true){
  case IS_WEEKENDS.HALOWEEN:
    votedIco = 'fas fa-ghost';
  break;

  case IS_WEEKENDS.XMAS:
    votedIco = 'fas fa-candy-cane';
  break;

  case IS_WEEKENDS.MAY9:
    votedIco = 'fas fa-medal';
  break;

  case IS_WEEKENDS.SEPTEMBER1:
    votedIco = 'fas fa-book-open';
  break;

  case (IS_WEEKENDS.EASTER_PRAV || IS_WEEKENDS.EASTER_KATOL):
    votedIco = 'fas fa-egg';
  break;

  case IS_WEEKENDS.LUPA_BIRTHDAY:
    votedIco = 'fas fa-beer';
  break;

  case (IS_WEEKENDS.NEE_RADIO_RELEASE || IS_WEEKENDS.NEE_BIRTHDAY):
    votedIco = 'fas fa-birthday-cake';
  break;
}

export const ICONS = {
  LIKE: 'far fa-heart',
  LIKED: 'fas fa-heart',
  VOTE: 'fas fa-plus',
  VOTED: votedIco,
  NEXT_ARROW: 'fas fa-arrow-right',
  BACK_ARROW: 'fas fa-arrow-left',
  NEXT_ANGLE: 'fas fa-chevron-right',
  BACK_ANGLE: 'fas fa-chevron-left',
  LIVE: 'fas fa-fire-alt',
  SEARCH: 'fas fa-search',
  HOME_PAGE: 'fas fa-home',
  PROFILE_PAGE: 'fas fa-user',
  CHAT_PAGE: 'fas fa-comment-alt',
  MORE_INFO: 'fas fa-expand-alt',
  ARTIST: 'fas fa-user',
  SCROLL_TO_TOP: 'fas fa-chevron-up',
  DISCORD: 'fab fa-discord',
  VK: 'fab fa-vk',
  TWITTER: 'fab fa-twitter',
  COMPRESS_MENU: 'fas fa-chevron-left',
  OPEN_MENU: 'fas fa-chevron-right',
  CLOSE: 'fas fa-times',
  HIDDEN: 'fas fa-eye-slash',
  SHOWED: 'fas fa-eye'
};
