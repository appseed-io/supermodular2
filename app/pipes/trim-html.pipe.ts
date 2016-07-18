import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'trimHtml'
})
export class TrimHtmlPipe implements PipeTransform {
	public transform(value: string): string {
		return this.htmlToPlainText(value);
	}

	private htmlToPlainText(html: string): string {
		return String(html).replace(/<[^>]+>/gm, '');
	}
}