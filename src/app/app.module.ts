import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { AthletePage } from '../pages/athlete/athlete';
import { AthletesPage } from '../pages/athletes/athletes';
import { ResultsPage } from '../pages/results/results';
import { TabsPage } from '../pages/tabs/tabs';
import { OneSignal } from '@ionic-native/onesignal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AthletesProvider } from '../providers/athletes/athletes';
import { ResultsProvider } from '../providers/results/results';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AthletePage,
    AthletesPage,
    ResultsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AthletePage,
    AthletesPage,
    ResultsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AthletesProvider,
    ResultsProvider,
    OneSignal
  ]
})
export class AppModule {}
