import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

import { App, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';


import { HomePage } from '../pages/home/home.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';
import { ComponentsListPage } from '../pages/components/list/components.list.page';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;

	@ViewChild(Nav) nav: Nav;

	constructor(app: App, platform: Platform, menu: MenuController) {
		this.menu = menu;
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Wordpress', component: WordpressListPage, icon: 'logo-wordpress' },
			{ title: 'Slides', component: SlideBoxPage, icon: 'swap' },
			{ title: 'Google maps', component: GoogleMapsPage, icon: 'map' },
			{ title: 'Components', component: ComponentsListPage, icon: 'grid' }
		];

		this.rootPage = HomePage;
	}

	initializeApp() {
		this.platform.ready().then(() => {
			StatusBar.styleDefault();
		});
	}

	openPage(page) {
		this.menu.close();
		this.nav.setRoot(page.component);
	}
}
