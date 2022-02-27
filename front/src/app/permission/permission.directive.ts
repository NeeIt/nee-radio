import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {PermissionService} from './permission.service';

@Directive({selector: '[appPermission]'})
export class PermissionDirective implements OnInit{
  @Input('appPermission') permissionName: string;
  constructor(
    private permissionService: PermissionService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef){
  }

  ngOnInit(): void{
    if (this.permissionService.hasPermission(this.permissionName)){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
