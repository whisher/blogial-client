/* Core */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

/* Ngrx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomRouterStateSerializer } from './store/utils';
import { effects, reducers, metaReducers } from './store';

/* Externals */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Env */
import { environment } from '../environments/environment';

/* App */
import { AuthenticationSharedModule } from './features/authentication/shared/shared.module';
import { PostsSharedModule } from './features/admin/posts/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { URLS } from './config/config.tokens';
import { Config_Urls } from './config/config-urls';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'blogial' }),
    HttpClientModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([...effects]),
    StoreRouterConnectingModule.forRoot({stateKey:'router'}),
    StoreDevtoolsModule.instrument({
      name: 'Blogial DevTools',
      logOnly: environment.production,
    }),
    NgbModule.forRoot(),
    AuthenticationSharedModule.forRoot(),
    PostsSharedModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    { provide: URLS, useValue: Config_Urls },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
