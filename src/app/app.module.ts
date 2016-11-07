import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { WordpressItemPage } from '../pages/wordpress/item/wordpress.item.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
import { HomePage } from '../pages/home/home.page';
import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';
import { CallService } from '../services/call.service';
import { EmailService } from '../services/email.service';
import { InAppBrowserService } from '../services/in-app-browser.service';
import { MapsService } from '../services/maps.service';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { TrimHtmlPipe } from '../pipes/trim-html.pipe';
import { Config } from '../config';

@NgModule({
	declarations: [
		MyApp,

		HomePage,
		SlideBoxPage,
		WordpressItemPage,
		WordpressListPage,
		GoogleMapsPage,

		TruncatePipe,
		TrimHtmlPipe
	],
	imports: [
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		SlideBoxPage,
		WordpressItemPage,
		WordpressListPage,
		GoogleMapsPage
	],
	providers: [
		CallService,
		EmailService,
		InAppBrowserService,
		MapsService,
		Config
	]
})
export class AppModule {
}
