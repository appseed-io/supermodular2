import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './pages/home/home.page';
import { SlideBoxPage } from './pages/slide-box/slide-box.page';
import { GoogleMapsPage } from './pages/google-maps/google-maps.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	pages: any[];
	rootPage: any;

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private menu: MenuController
	) {
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', path: '/', icon: 'home' },
			{ title: 'Wordpress', path: '/wordpress-articles', icon: 'logo-wordpress' },
			{ title: 'Slides', path: '/slides', icon: 'swap' },
			{ title: 'Google maps', path: '/map', icon: 'map' },
			{ title: 'Components', path: '/components', icon: 'grid' },
		];

		this.rootPage = HomePage;
		this.menu.open('start');
	}

	closeMenu() {
		this.menu.close();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
