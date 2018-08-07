import { Post } from '../models/poster.model';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { WordpressService } from '../wordpress.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-wordpress.list',
	templateUrl: './wordpress.list.page.html',
	styleUrls: ['./wordpress.list.page.scss'],
})
export class WordpressListPage implements OnInit {
	public posts: Post[];
	private loading;

	constructor(
		private loadingCtrl: LoadingController,
		private wordpressService: WordpressService,
		private router: Router
	) {
		this.loadingCtrl
			.create({ content: 'Loading, please wait...' })
			.then(loading => {
				this.loading = loading;
				this.loading.present();
			});
	}

	ngOnInit(): void {
		this.wordpressService.getPosts()
			.subscribe(posts => {
				this.posts = posts;
				this.loading.dismiss();
			});
	}

	public itemTapped(post: Post) {
		this.router.navigateByUrl(`/wordpress-articles/${post.id}`);
	}
}
