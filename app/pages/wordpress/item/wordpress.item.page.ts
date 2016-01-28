import { Page, NavParams } from 'ionic-framework/ionic';
import { Post } from '../models/post.model';

@Page({
	templateUrl: 'build/pages/wordpress/item/wordpress.item.html'
})
export class WordpressItemPage {
	private post: Post;

	constructor(navParams: NavParams) {
		this.post = <Post>navParams.get('item');
	}
}
