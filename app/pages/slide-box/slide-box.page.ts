import { Page } from 'ionic-framework/ionic';

@Page({
	templateUrl: 'build/pages/slide-box/slide-box.html'
})
export class SlideBoxPage {
	public items: any[];

	constructor() {
		this.items = SlideBoxPage.generateItems(7);
	}

	private static generateItems(n: number): any {
		let items = [];
		for (let i = 0; i < n; i++) {
			items.push({
				image: 'http://lorempixel.com/g/786/1024/city/' + i + '/'
			});
		}
		return items;
	}
}
