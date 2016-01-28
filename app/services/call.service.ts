import { Injectable } from 'angular2/core';

@Injectable()
export class CallService {
	public call(phoneNumber: string): void {
		window.location.href = 'tel:' + phoneNumber;
	}
}