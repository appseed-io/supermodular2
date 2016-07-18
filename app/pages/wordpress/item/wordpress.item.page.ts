import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Post } from '../models/post.model';

@Component({
	templateUrl: 'build/pages/wordpress/item/wordpress.item.html'
})
export class WordpressItemPage {
	private post: Post;

	constructor(navParams: NavParams) {
		this.post = <Post>navParams.get('item');
	}
}
