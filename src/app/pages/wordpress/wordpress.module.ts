import { WordpressService } from './wordpress.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Config } from '../../config';

import { WordpressListPage } from './list/wordpress.list.page';
import { PipesModule } from '../../pipes/pipes.module';
import { WordpressItemPage } from './item/wordpress.item.page';

const routes: Routes = [
	{
		path: '',
		component: WordpressListPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		PipesModule
	],
	declarations: [
		WordpressListPage,
		WordpressItemPage
	],
	providers: [
		WordpressService,
		Config
	]
})
export class WordpressModule {}
