import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { SegmentDisplayModule } from 'segment-display';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SegmentDisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
