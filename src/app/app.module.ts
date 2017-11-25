import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatToolbarModule, MatIconModule, MatCardModule} from '@angular/material';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from "../environments/environment"

import {AppComponent} from './app.component';
import {ImageCardComponent} from './image-card/image-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
