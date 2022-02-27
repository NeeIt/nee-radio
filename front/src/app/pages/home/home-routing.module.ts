import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PermissionGuard} from 'src/app/permission/permission.guard';
import {HistoryPlaylistComponent} from './components/history-playlist/history-playlist.component';
import {LivePlaylistComponent} from './components/live-playlist/live-playlist.component';
import {HomeComponent} from './home.component';

const routes: Routes = [
   {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LivePlaylistComponent
      },
      {
        path: 'history',
        component: HistoryPlaylistComponent,
        data: {permission: 'home_history'},
        canActivate: [PermissionGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule{ }
