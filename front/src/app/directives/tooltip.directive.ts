import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {DeviceService} from '../services/device.service';

@Directive({selector: '[tooltip]'})
export class TooltipDirective{
  @Input('tooltip') tooltipTitle: string;
  @Input() tooltopPosition = 'top';
  tooltip: HTMLElement;
  offset = 10;
  delay = 500;


  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private deviceService: DeviceService){ }

  @HostListener('mouseenter') mouseEnter(): void{
    if (!this.tooltip && this.tooltipTitle && !this.deviceService.isTouchDevice){
      this.show();
    }
  }

  @HostListener('mouseleave') mouseLeave(): void{
    if (this.tooltip){
      this.hide();
    }
  }

   show(): void{
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
  }

  hide(): void{
    if (this.tooltip){
      this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
      window.setTimeout(() => {
        // Проверка на случай, если за время задержки (500мс) элемент успел исчезнуть.
        // В таком случаи отработает destroy, а не уберание курсора
        if (this.tooltip){
          this.renderer.removeChild(document.body, this.tooltip);
          this.tooltip = null;
        }
      }, this.delay);
    }
  }

  create(): void{
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );

    this.renderer.appendChild(document.body, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    this.renderer.addClass(this.tooltip, `ng-tooltip-${this.tooltopPosition}`);

    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
  }

  setPosition(): void{
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.tooltopPosition === 'top'){
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.tooltopPosition === 'bottom'){
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.tooltopPosition === 'left'){
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.tooltopPosition === 'right'){
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }

  ngOnDestroy(): void{
    this.hide();
  }
}
