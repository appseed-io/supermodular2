import { Component, OnInit } from '@angular/core';
import { Tile } from './models/tile.model';
import { data } from './home-data';
import { EmailService } from '../../services/email.service';
import { CallService } from '../../services/call.service';
import { MapsService } from '../../services/maps.service';
import { InAppBrowserService } from '../../services/in-app-browser.service';
import { SlideBoxPage } from '../slide-box/slide-box.page';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	public tiles: Tile[][];

	constructor(
		private emailService: EmailService,
		private callService: CallService,
		private mapsService: MapsService,
		private browserService: InAppBrowserService
	) { }

	ngOnInit() {
		this.initTiles();
	}

	public getDirections() {
		this.mapsService.openMapsApp(data.officeLocation);
	}

	public sendEmail() {
		this.emailService.sendEmail(data.email);
	}

	public openFacebookPage() {
		this.browserService.open(data.facebook);
	}

	public callUs() {
		this.callService.call(data.phoneNumber);
	}

	private initTiles(): void {
		this.tiles = [[{
			title: 'Wordpress',
			path: '/wordpress-articles',
			icon: 'logo-wordpress'
		}, {
			title: 'Slides',
			path: '/slides',
			icon: 'swap'
		}], [{
			title: 'Map',
			path: '/map',
			icon: 'map'
		}]];
	}
}
