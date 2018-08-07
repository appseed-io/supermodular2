import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InAppBrowserService {
	public open(url: string): boolean {
		window.open(url, '_system', 'location=yes');
		return false;
	}
}
