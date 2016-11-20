import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Post } from '../models/post.model';

@Component({
	templateUrl: 'wordpress.item.html'
})
export class WordpressItemPage {
	post: Post;

	constructor(navParams: NavParams) {
		this.post = <Post>navParams.get('item');
	}
}
