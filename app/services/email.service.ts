import { Injectable } from 'angular2/core';

class Email {
	to: string;
	subject: string;
	body: string;
}

@Injectable()
export class EmailService {
	public sendEmail(email: Email) {
		window.cordova.plugins.email.isAvailable(() => {
			window.cordova.plugins.email.open(email);
		});
	}
}