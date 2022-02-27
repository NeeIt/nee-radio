import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {DEFAULT_NEWS_COVER, ICONS} from 'src/app/constants/constants';
import {newsSelector} from 'src/app/store/selectors/news.selector';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsSliderComponent implements AfterViewInit{
  @ViewChild('slider') slider: ElementRef;
  newsList$ = this.store.select(newsSelector);

  readonly defaultNewsCover = DEFAULT_NEWS_COVER;
  readonly icons = ICONS;
  currentSlide = 0;
  slidingTimeout = 7000;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timeout: any;

  constructor(private store: Store){
  }

  setSlide(index: number): void{
    const slidesLength = this.slider.nativeElement.children.length;
    this.currentSlide = index >= slidesLength
      ? 0
      : index;

    this.slider.nativeElement.style.transform = `translateX(-${this.currentSlide * 100 + '%'})`;

    clearTimeout(this.timeout);
    if (slidesLength > 1){
      this.setNextAutoSlide();
    }
  }

  nextSlide(): void{
    this.setSlide(this.currentSlide + 1);
  }

  setNextAutoSlide(): void{
    this.timeout = setTimeout(() => {
      this.nextSlide();
    }, this.slidingTimeout);
  }

  ngAfterViewInit(): void{
    this.timeout = setTimeout(() => {
      this.nextSlide();
    }, this.slidingTimeout);
  }
}
