import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {PermissionService} from './permission.service';

@Injectable({providedIn: 'root'})
export class PermissionGuard implements CanActivate{
  constructor(
    private permissionService: PermissionService,
    private router: Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    const permission = route.data['permission'];
    if (permission && !this.permissionService.hasPermission(permission)){
      this.router.navigate(['404']);

      return false;
    }

    return true;
  }
}
