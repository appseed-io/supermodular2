import { Component, OnInit } from '@angular/core';
import { Post } from '../models/poster.model';
import { WordpressService } from '../wordpress.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-wordpress.item',
	templateUrl: './wordpress.item.page.html',
	styleUrls: ['./wordpress.item.page.scss'],
})
export class WordpressItemPage {
	post: Post;

	constructor(
		private route: ActivatedRoute,
		private wordpressService: WordpressService
	) {
		let postId = Number(this.route.snapshot.paramMap.get('postId'));
		this.wordpressService
			.getPost(postId)
			.then(post => {
				this.post = post;
			});
	}
}
