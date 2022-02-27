import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaylistComponent} from './playlist/playlist.component';
import {ArtistListComponent} from './artist-list/artist-list.component';
import {PlayCoverComponent} from './play-cover/play-cover.component';
import {InputComponentsModule} from '../inputs/inputs.module';
import {PlayBarComponent} from './play-bar/play-bar.component';
import {LivePlaylistComponent} from './live-playlist/live-playlist.component';
import {DirectiveModule} from 'src/app/directives/directive.module';
import {PipeModule} from 'src/app/pipes/pipe.module';
import {PermissionModule} from 'src/app/permission/permission.module';


@NgModule({
  declarations: [
    PlaylistComponent,
    ArtistListComponent,
    PlayCoverComponent,
    PlayBarComponent,
    LivePlaylistComponent
  ],
  imports: [
    CommonModule,
    InputComponentsModule,
    DirectiveModule,
    PipeModule,
    PermissionModule
  ],
  exports: [
    PlaylistComponent,
    ArtistListComponent,
    PlayCoverComponent,
    PlayBarComponent,
    LivePlaylistComponent
  ]
})
export class MusicComponentsModule{ }
