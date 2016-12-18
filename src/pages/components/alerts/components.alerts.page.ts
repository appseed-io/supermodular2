import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	templateUrl: 'components.alerts.html'
})
export class ComponentsAlertsPage {
	testRadioOpen: boolean;
	testRadioResult;
	testCheckboxOpen: boolean;
	testCheckboxResult;

	constructor(
		public alertCtrl: AlertController
	) {
	}

	doAlert() {
		let alert = this.alertCtrl.create({
			title: 'Alert!',
			message: 'This is some important information!',
			buttons: ['Ok']
		});
		alert.present();
	}

	doPrompt() {
		let prompt = this.alertCtrl.create({
			title: 'Password',
			message: 'Enter your password to login',
			inputs: [
				{
					name: 'password',
					placeholder: 'Password'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					handler: data => {
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Login',
					handler: data => {
						console.log('Login clicked');
					}
				}
			]
		});
		prompt.present();
	}

	doConfirmation() {
		let confirmation = this.alertCtrl.create({
			title: 'Confirmation',
			message: 'Are you sure you want to delete this item?',
			buttons: [
				{
					text: 'No',
					handler: () => {
						console.log('No clicked');
					}
				},
				{
					text: 'Yes',
					handler: () => {
						console.log('Yes clicked');
					}
				}
			]
		});
		confirmation.present();
	}

	doRadioAlert() {
		let radioAlert = this.alertCtrl.create();
		radioAlert.setTitle('Select color');

		radioAlert.addInput({
			type: 'radio',
			label: 'Blue',
			value: 'blue',
			checked: true
		});

		radioAlert.addInput({
			type: 'radio',
			label: 'Green',
			value: 'green'
		});

		radioAlert.addInput({
			type: 'radio',
			label: 'Red',
			value: 'red'
		});

		radioAlert.addInput({
			type: 'radio',
			label: 'Yellow',
			value: 'yellow'
		});

		radioAlert.addInput({
			type: 'radio',
			label: 'Purple',
			value: 'purple'
		});

		radioAlert.addInput({
			type: 'radio',
			label: 'White',
			value: 'white'
		});

		radioAlert.addInput({
			type: 'radio',
			label: 'Black',
			value: 'black'
		});

		radioAlert.addButton('Cancel');
		radioAlert.addButton({
			text: 'Ok',
			handler: data => {
				console.log('Radio data:', data);
				this.testRadioOpen = false;
				this.testRadioResult = data;
			}
		});

		radioAlert.present().then(() => {
			this.testRadioOpen = true;
		});
	}

	doCheckboxAlert() {
		let checkboxAlert = this.alertCtrl.create();
		checkboxAlert.setTitle('Which fruits you like?');

		checkboxAlert.addInput({
			type: 'checkbox',
			label: 'Apple',
			value: 'apple',
			checked: true
		});

		checkboxAlert.addInput({
			type: 'checkbox',
			label: 'Banana',
			value: 'banana'
		});

		checkboxAlert.addInput({
			type: 'checkbox',
			label: 'Kiwi',
			value: 'kiwi'
		});

		checkboxAlert.addInput({
			type: 'checkbox',
			label: 'Strawberry',
			value: 'strawberry'
		});

		checkboxAlert.addInput({
			type: 'checkbox',
			label: 'Pineapple',
			value: 'pineapple'
		});

		checkboxAlert.addButton('Cancel');
		checkboxAlert.addButton({
			text: 'Okay',
			handler: data => {
				console.log('Checkbox data:', data);
				this.testCheckboxOpen = false;
				this.testCheckboxResult = data;
			}
		});
		checkboxAlert.present().then(() => {
			this.testCheckboxOpen = true;
		});
	}
}
