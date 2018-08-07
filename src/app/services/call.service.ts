import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallService {
	public call(phoneNumber: string): void {
		window.location.href = 'tel:' + phoneNumber;
	}
}
