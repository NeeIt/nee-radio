import {AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Input, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {ICONS} from 'src/app/constants/constants';

@Component({
  selector: 'app-popup-template',
  templateUrl: './popup-template.component.html',
  styleUrls: ['./popup-template.component.scss']
})
export class PopupTemplateComponent implements AfterViewInit{
  readonly icons = ICONS;
  @ViewChild('popupBody', {read: ViewContainerRef}) container: ViewContainerRef
  @Input() name: string;
  @Input() data: unknown;
  @Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();
  // callBack для создания внутреннего компонента
  afterViewInitFunc = (): void => {};

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver){
  }

  ngAfterViewInit(): void{
    this.afterViewInitFunc();
  }
}
