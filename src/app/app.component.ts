import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      Environment.setEnv({
        // api key for server
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCwAeSCt5Whod2kX4LKavwv_QFsbuFHnZ4',

        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCwAeSCt5Whod2kX4LKavwv_QFsbuFHnZ4'
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}