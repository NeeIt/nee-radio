import {Injectable} from '@angular/core';
import {JS_MEDIA_SIZES} from '../constants/constants';

@Injectable({providedIn: 'root'})
export class DeviceService{
  constructor(){ }

  isTouchDevice(): boolean{
  return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
  }

  private checkWindowSize([from, to]: [number, number]): boolean{
    // Если не передано максимальное разрешение для размера, то делаем его неограниченным
    if (!to){
      to = Infinity;
    }
    // Аналогично если нет минимального
    if (!from){
      from = -Infinity;
    }

    return window.innerWidth > from && window.innerWidth < to;
  }

  isTableSize(): boolean{
    return this.checkWindowSize(JS_MEDIA_SIZES.TABLE);
  }

  isAnyTableSize(): boolean{
    return this.checkWindowSize(JS_MEDIA_SIZES.TABLE)
    || this.checkWindowSize(JS_MEDIA_SIZES.SMALL_TABLE);
  }

  isDesktopSize(): boolean{
    return this.checkWindowSize(JS_MEDIA_SIZES.DESKTOP);
  }

  isSmallTableSize(): boolean{
    return this.checkWindowSize(JS_MEDIA_SIZES.SMALL_TABLE);
  }
  // TODO проверить не чередую ли я где-то phone, где-то mobile
  isMobileSize(): boolean{
    return this.checkWindowSize(JS_MEDIA_SIZES.MOBILE);
  }

  isSmallMobileSize(): boolean{
    return this.checkWindowSize(JS_MEDIA_SIZES.SMALL_MOBILE);
  }

  isAnyMobileSize(): boolean{
    return this.checkWindowSize(JS_MEDIA_SIZES.SMALL_MOBILE)
    || this.checkWindowSize(JS_MEDIA_SIZES.MOBILE)
    || this.checkWindowSize(JS_MEDIA_SIZES.BREAK_MOBILE);
  }
}
