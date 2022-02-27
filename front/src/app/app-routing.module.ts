import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {PermissionGuard} from './permission/permission.guard';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: {permission: 'homePage'},
    canActivate: [PermissionGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    data: {permission: 'profilePage'},
    canActivate: [PermissionGuard]
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule),
    data: {permission: 'chatPage'},
    canActivate: [PermissionGuard]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'logout',
    redirectTo: 'login'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
