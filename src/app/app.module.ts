/* Core */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot(),
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
