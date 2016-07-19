import { Injectable } from '@angular/core';

class Email {
	to: string;
	subject: string;
	body: string;
}

@Injectable()
export class EmailService {
	public sendEmail(email: Email) {
		let plugins: any = window.cordova.plugins;
		plugins.email.isAvailable(() => {
			plugins.email.open(email);
		});
	}
}