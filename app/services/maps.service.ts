import { Injectable } from 'angular2/core';
import { Platform } from 'ionic-framework/ionic';

@Injectable()
export class MapsService {
	private platform: Platform;

	constructor(platform: Platform) {
		this.platform = platform;
	}

	public openMapsApp(location: any) {
		let q;
		if (this.platform.isPlatform('android')) {
			q = 'geo:' + location;
		} else {
			q = 'maps://maps.apple.com/?q=' + location;
		}
		window.location.href = q;
	}
}