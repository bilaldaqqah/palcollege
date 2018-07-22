import { NewsfeedPage } from './../pages/newsfeed/newsfeed';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  constructor(platform: Platform, afAuth: AngularFireAuth, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      afAuth.authState.subscribe(
        user => {
          if (user) {
            this.rootPage = NewsfeedPage;
          } else {
            this.rootPage = LoginPage;
          }
          statusBar.styleDefault();
          splashScreen.hide();
        },
        () => {
          this.rootPage = LoginPage;
          statusBar.styleDefault();
          splashScreen.hide();
        }
      )
    });
  }
 
}

