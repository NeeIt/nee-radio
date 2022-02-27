import {ElementRef, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ScrollService{
  constructor(){ }

  isVisible(element: ElementRef): boolean{
    const rect = element.nativeElement.getBoundingClientRect();
    const elemBottom = rect.bottom;

    return (elemBottom >= 0) && (elemBottom <= window.innerHeight);
  }
}
