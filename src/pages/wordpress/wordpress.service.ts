import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';

@Injectable()
export class WordpressService {
	private articles: Post[];

	constructor(
		private http: Http,
		private config: Config
	) {}

	public getPosts(): Observable<Post[]> {
		return this.http.get(this.config.wordpressApiUrl)
			.map(x => x.json())
			.map(response => {
				this.articles = response.posts.map((item: any) => this.createArticle(item));
				return this.articles;
			});
	}

	private createArticle(item): Post {
		let imageUrl = item.attachments.length > 0 ? item.attachments[0].images.full.url : null;
		let tags = item.tags.map(x => x.title);

		let contentIndex = item.content.indexOf('</p>') + 4;
		let content = contentIndex === -1 ? item.content : item.content.substring(contentIndex);

		return {
			id: item.id,
			title: item.title,
			brief: item.excerpt,
			image: imageUrl,
			date: item.date,
			content: content,
			author: item.author.name,
			tags: tags,
			url: this.config.wordpressApiUrl
		};
	};
}
