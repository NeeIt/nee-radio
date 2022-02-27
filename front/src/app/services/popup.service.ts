import {ComponentFactoryResolver, ComponentRef, Injectable, Renderer2, RendererFactory2, Type, ViewContainerRef} from '@angular/core';
import {PopupTemplateComponent} from '../components/popups/popup-template/popup-template.component';
import {POPUP_LIST} from '../constants/popup-list';

export interface PopupParams {
  data?: any;
  onClose?: () => void;
}

export interface NotificationPopupParams {
  title: string;
  text: string;
  onClose?: () => void;
}


@Injectable({providedIn: 'root'})
export class PopupService{
  static activePopupList: { [key: string]: number } = {};
  private viewContainerRef: ViewContainerRef;
  private renderer2: Renderer2;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private rendererFactory: RendererFactory2
    ){
      this.renderer2 = rendererFactory.createRenderer(null, null);
    }

  open(name: string, params: PopupParams = {}): void{
    if (!this.isOpen(name)){
      this.createComponent(name, params);
    } else {

    }
  }

  setViewContainerRef(viewContainerRef: ViewContainerRef): void{
    if (!this.viewContainerRef){
      this.viewContainerRef = viewContainerRef;
    }
  }

  notification(params: NotificationPopupParams): void{

  }

  isOpen(name: string): boolean{
    return PopupService.activePopupList.hasOwnProperty(name);
  }

  setScrollState(active: boolean): void{
    this.renderer2.setStyle(document.body, 'overflow', active
    ? 'visible'
    : 'hidden');
  }

  createComponent(name: string, params: PopupParams): void{
    const templateRef: ComponentRef<PopupTemplateComponent> = this.viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(PopupTemplateComponent)
    );
    PopupService.activePopupList[name] = this.viewContainerRef.indexOf(templateRef.hostView);
    // Передаем Input параметры в компонент
    (templateRef.instance).name = name;
    (templateRef.instance).data = params.data;
    (templateRef.instance).closeEvent.subscribe(() => {
      this.close(name);
      if (params.onClose){
        params.onClose();
      }
    });
    // Когда загрузится контейнер для внутреннего компонента, вставим сам внутренний компонент
    (templateRef.instance).afterViewInitFunc = () => {
      const container = (templateRef.instance).container;
      container.createComponent(
        this.componentFactoryResolver
        .resolveComponentFactory(this.getComponent(name))
        );
      };
  }

  close(name: string): void{
    if (this.isOpen(name)){
      // Удаляем из документа
      this.viewContainerRef.remove(PopupService.activePopupList[name]);
      // Если закрыли не внешний попап, а внутренний, то перебираем индексы попапов
      for (const key in PopupService.activePopupList){
        if (PopupService.activePopupList[key] > PopupService.activePopupList[name]){
          PopupService.activePopupList[key]--;
        }
      }
      // Удаляем из нашего списка активных попапов
      delete PopupService.activePopupList[name];
      // Если попапов больше нет, то разрешаем скролл
      if (!Object.keys(PopupService.activePopupList).length){
        this.setScrollState(true);
      }
    }
  }

  getComponent(name: string): Type<unknown>{
    return POPUP_LIST[name].component;
  }
}
