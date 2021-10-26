import {Injectable} from '@angular/core';
import {MissingTranslationHandlerParams} from '@ngx-translate/core';

@Injectable({providedIn: 'root'})
export class LocaleService{
localeList = {russian: 'ru', english: 'en'};
  private readonly defaultLocale = 'ru';
  selectedLocale: string;

  constructor(){
    this.selectedLocale = this.defaultLocale;
  }

  handle(params: MissingTranslationHandlerParams): string{
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
  }

  setLocale(locale: string): void{
    this.selectedLocale = locale;
  }
}
