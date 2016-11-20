import { Component } from '@angular/core';

import { IMarker, IPoint } from './interfaces';

@Component({
	templateUrl: 'google-maps.html'
})
export class GoogleMapsPage {
	public markers: IMarker[];
	public origin: IPoint;
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
