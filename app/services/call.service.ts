import { Injectable } from '@angular/core';

@Injectable()
export class CallService {
	public call(phoneNumber: string): void {
		window.location.href = 'tel:' + phoneNumber;
	}
}