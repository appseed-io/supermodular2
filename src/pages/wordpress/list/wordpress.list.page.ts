import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { WordpressService } from '../wordpress.service';
import { WordpressItemPage } from '../item/wordpress.item.page';
import { Post } from '../models/post.model';

@Component({
	templateUrl: 'wordpress.list.html',
	providers: [WordpressService]
})
export class WordpressListPage implements OnInit {
	public posts: Post[];
	private loading;

	constructor(
		private loadingCtrl: LoadingController,
		private wordpressService: WordpressService,
		private nav: NavController
	) {
		this.loading = this.loadingCtrl.create({ content: 'Loading, please wait...' });
		this.loading.present();
	}

	ngOnInit(): void {
		this.wordpressService.getPosts()
			.subscribe(posts => {
				this.posts = posts;
				this.loading.dismiss();
			});
	}

	public itemTapped(item) {
		this.nav.push(WordpressItemPage, {
			item: item
		});
	}
}
