import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsPage } from './product-details/product-details.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  declarations: [AppComponent, ProductDetailsPage],
  entryComponents: [ProductDetailsPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    //  BarcodeScanner,
    QRScanner,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
