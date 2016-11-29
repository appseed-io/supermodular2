import { NgModule } from '@angular/core';
import { TrimHtmlPipe } from './trim-html.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
	declarations: [
		TruncatePipe,
		TrimHtmlPipe
	],
	exports: [
		TruncatePipe,
		TrimHtmlPipe
	]
})
export class PipesModule {

}
