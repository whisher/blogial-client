/* Core */
import { BrowserModule } from '@angular/platform-browser';
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
import { CustomRouterStateSerializer } from './store/router';
import { reducers, metaReducers } from './store/reducers';

/* Externals */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Env */
import { environment } from '../environments/environment';

/* App */
import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from './shared/icons/icons.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'blogial' }),
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({stateKey:'router'}),
    NgbModule.forRoot(),
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
