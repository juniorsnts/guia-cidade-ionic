import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook } from '../../node_modules/@ionic-native/facebook';

export const firebaseConfig = {
  apiKey: "AIzaSyAkv9qioHpHdml9AbaCxjrNqZ8ORjGJMbU",
  authDomain: "guiacidades-793e0.firebaseapp.com",
  databaseURL: "https://guiacidades-793e0.firebaseio.com",
  projectId: "guiacidades-793e0",
  storageBucket: "guiacidades-793e0.appspot.com",
  messagingSenderId: "214112858260"
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireDatabase,
    Facebook
  ]
})
export class AppModule {}
