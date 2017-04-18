import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { GoogleMapsPage } from './google-maps.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
	declarations: [GoogleMapsPage],
	entryComponents: [GoogleMapsPage],
	imports: [IonicModule, AgmCoreModule]
})
export class GoogleMapsModule {

}
