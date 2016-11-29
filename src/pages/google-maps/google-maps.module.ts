import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { GoogleMapsPage } from './google-maps.page';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
	declarations: [GoogleMapsPage],
	entryComponents: [GoogleMapsPage],
	imports: [IonicModule, AgmCoreModule]
})
export class GoogleMapsModule {

}
