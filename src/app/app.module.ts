/* Core */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

/* Externals */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* App */
import { AppRoutingModule } from './app-routing.module';
import { IconsFortawesomeModule } from './shared/fortawesome/fortawesome.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'blogial' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot(),
    AppRoutingModule,
    IconsFortawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
