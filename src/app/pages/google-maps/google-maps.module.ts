import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';

import { GoogleMapsPage } from './google-maps.page';

const routes: Routes = [
	{
		path: '',
		component: GoogleMapsPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		AgmCoreModule,
		RouterModule.forChild(routes)
	],
	declarations: [GoogleMapsPage]
})
export class GoogleMapsPageModule {}
