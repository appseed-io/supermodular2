import { Component } from '@angular/core';

@Component({
	selector: 'app-slide-box',
	templateUrl: './slide-box.page.html',
	styleUrls: ['./slide-box.page.scss'],
})
export class SlideBoxPage {
	public items: any[];

	constructor() {
		this.items = this.generateItems(7);
	}

	private generateItems(n: number): any {
		let items = [];
		for (let i = 0; i < n; i++) {
			items.push({
				image: 'http://lorempixel.com/g/786/1024/city/' + i + '/'
			});
		}
		return items;
	}
}
