import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';

// TODO: Add the camera service base class to the providers and use a factory to create an instance of the concrete camera service.

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
