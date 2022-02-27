import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {InputComponentsModule} from 'src/app/components/inputs/inputs.module';
import {MusicComponentsModule} from 'src/app/components/music-components/music-components.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {LivePlaylistComponent} from './components/live-playlist/live-playlist.component';
import {HistoryPlaylistComponent} from './components/history-playlist/history-playlist.component';
import {NewsSliderComponent} from './components/news-slider/news-slider.component';
import {PermissionModule} from 'src/app/permission/permission.module';
import {BlocksModule} from 'src/app/components/blocks/blocks.module';

@NgModule({
  declarations: [
    HomeComponent,
    LivePlaylistComponent,
    HistoryPlaylistComponent,
    NewsSliderComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MusicComponentsModule,
    InputComponentsModule,
    BlocksModule,
    PermissionModule
  ]
})
export class HomeModule{ }
