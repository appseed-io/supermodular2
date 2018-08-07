import { Injectable } from '@angular/core';
import { Post } from './models/poster.model';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
	private articles: Post[];

	constructor(
		private http: HttpClient,
		private config: Config
	) {}

	public getPosts(): Observable<Post[]> {
		return this.http
			.get(this.config.wordpressApiUrl)
			.pipe(
				map((response: any) => {
					this.articles = response.posts.map((item: any) => this.createArticle(item));
					return this.articles;
				})
			);
	}

	public getPost(postId: number): Promise<Post> {
		return new Promise<Post>(resolve => {
			if (this.articles) {
				const post = this.articles.find(x => x.id === postId);
				resolve(post);
			} else {
				this.getPosts()
					.subscribe(x => {
						const post = this.articles.find(x => x.id === postId);
						resolve(post);
					});
			}
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
