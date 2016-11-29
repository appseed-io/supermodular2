import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';

import { WordpressItemPage } from './item/wordpress.item.page';
import { WordpressListPage } from './list/wordpress.list.page';

@NgModule({
	imports: [
		IonicModule,
		PipesModule
	],
	declarations: [
		WordpressItemPage,
		WordpressListPage
	],
	entryComponents: [
		WordpressItemPage,
		WordpressListPage
	]
})
export class WordpressModule {

}
