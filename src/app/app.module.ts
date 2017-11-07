import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
