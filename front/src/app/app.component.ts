import {ChangeDetectionStrategy, Component, HostListener, ViewContainerRef} from '@angular/core';
import {Store} from '@ngrx/store';
import {PermissionService} from './permission/permission.service';
import {PopupService} from './services/popup.service';
import {isMenuCompressedSelector} from './store/selectors/app.selector';
import {customSettingsSelector} from './store/selectors/user.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  customSettings$ = this.store.select(customSettingsSelector);
  isMenuCompressed$ = this.store.select(isMenuCompressedSelector);
  isFullyScrolled = false;
  hideRightPanel = false;
  hideMenu = false;
  hideTopPanel = false;
  hideFooter = false;

  @HostListener('window:scroll') scrollPage(): void{
    this.isFullyScrolled = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private store: Store,
    private popupService: PopupService,
    public permissionService: PermissionService
    ){
      this.popupService.setViewContainerRef(viewContainerRef);
  }
}
