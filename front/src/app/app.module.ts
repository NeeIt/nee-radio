import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/main-components/header/header.component';
import {MenuComponent} from './components/main-components/menu/menu.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {RightPanelComponent} from './components/main-components/right-panel/right-panel.component';
import {InputComponentsModule} from './components/inputs/inputs.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './store/effects/app.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {reducers, metaReducers} from './store/reducers';
import {MusicComponentsModule} from './components/music-components/music-components.module';
import {MobileMenuComponent} from './components/main-components/menu/mobile-menu/mobile-menu.component';
import {LeftMenuComponent} from './components/main-components/menu/left-menu/left-menu.component';
import {ScrollToTopComponent} from './components/main-components/scroll-to-top/scroll-to-top.component';
import {FooterComponent} from './components/main-components/footer/footer.component';
import {PermissionModule} from './permission/permission.module';
import {RouterModule} from '@angular/router';
import {BlocksModule} from './components/blocks/blocks.module';
import {LivePlaylistEffects} from './store/effects/live-playlist.effects';
import {LoginComponent} from './components/popups/login/login.component';
import {PopupTemplateComponent} from './components/popups/popup-template/popup-template.component';
import {RegisterComponent} from './components/popups/register/register.component';
import {PopupModule} from './components/popups/popup.module';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader{
    return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    NotFoundComponent,
    RightPanelComponent,
    MobileMenuComponent,
    LeftMenuComponent,
    ScrollToTopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      useDefaultLang: false
    }),
    // permissions
    PermissionModule,
    //components
    InputComponentsModule,
    MusicComponentsModule,
    BlocksModule,
    PopupModule,
    // ngrx
    EffectsModule.forRoot([AppEffects, LivePlaylistEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
