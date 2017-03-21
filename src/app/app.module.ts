import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {PictureComponent} from './picture/picture.component';
import {CameraService} from './camera.service';
import {MobileCameraService} from './mobile-camera.service';
import {DesktopCameraService} from './desktop-camera.service';

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
  providers: [{
    provide: CameraService,
    useFactory: CameraServiceFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function CameraServiceFactory() {
  return window['cordova'] ? new MobileCameraService() : new DesktopCameraService();
}
