import {Directive, ElementRef, Input, Renderer2, AfterViewInit} from '@angular/core';

@Directive({selector: '[runLine]'})
export class RunLineDirective implements AfterViewInit{
  @Input('runLineSpeed') speed = 7.5;
  @Input('runLineDelay') delay = 5000;

  constructor(private el: ElementRef, private r: Renderer2){
  }

  // ngOnChanges(changes: SimpleChanges): void{
  //   for (const [key, value] of Object.entries(changes)){
  //     switch (key){
  //       case 'text':
  //         this.setState();
  //         break;
  //     }
  //   }
  // }

  ngAfterViewInit(): void{
    this.setState();
  }

  setState(): void{
    // TODO при изменении значения не обновляется состояние
    if (!this.el.nativeElement.scrollWidth) return;
    if (this.el.nativeElement.scrollWidth > this.el.nativeElement.clientWidth){
      const duration = (100 * (this.el.nativeElement.scrollWidth) / this.speed) + this.delay;

      this.el.nativeElement.animate([
        {transform: 'translateX(0px)'},
        {transform: 'translateX(0px)', offset: this.delay / duration},
        {transform: `translateX(-${this.el.nativeElement.scrollWidth}px)`}
      ], {
        duration,
        iterations: Infinity
      });
    }
  }
}
// TODO проверить директиву если сменилась песня с норм названием на длинное
