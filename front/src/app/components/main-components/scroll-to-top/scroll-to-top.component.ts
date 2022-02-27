import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ICONS} from 'src/app/constants/constants';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollToTopComponent implements AfterViewInit{
  readonly icons = ICONS;

  constructor(private changeDetectorRef: ChangeDetectorRef){ }

  scrollToTop(): void{
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  isScrollToTopVisible(): boolean{
    return window.scrollY > window.outerHeight;
  }

  ngAfterViewInit(): void{
    this.changeDetectorRef.detectChanges();
  }
}
