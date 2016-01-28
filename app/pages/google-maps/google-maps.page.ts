import { Page } from 'ionic-framework/ionic';

import {
	ANGULAR2_GOOGLE_MAPS_PROVIDERS,
	ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

import { Marker, Point } from './interfaces';

@Page({
	templateUrl: 'build/pages/google-maps/google-maps.html',
	directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
	providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})
export class GoogleMapsPage {
	public markers: Marker[];
	public origin: Point;
	public zoom: number;

	constructor() {
		this.initMarkers();
		this.origin = {
			lat: 51.673858,
			lng: 7.815982
		};
		this.zoom = 8;
	}

	public clickedMarker(label: string) {
		window.alert(`clicked the marker: ${label || ''}`);
	}

	private initMarkers(): void {
		this.markers = [{
			lat: 51.673858,
			lng: 7.815982,
			label: 'A'
		}, {
			lat: 51.373858,
			lng: 7.215982,
			label: 'B'
		}, {
			lat: 51.723858,
			lng: 7.895982,
			label: 'C'
		}];
	}
}
