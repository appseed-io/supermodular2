import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './pipes/pipes.module';

import { HomePageModule } from './pages/home/home.module';
import { SlideBoxPageModule } from './pages/slide-box/slide-box.module';
import { GoogleMapsPageModule } from './pages/google-maps/google-maps.module';
import { WordpressModule } from './pages/wordpress/wordpress.module';
import { ComponentsModule } from './pages/components/components.module';

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AgmCoreModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		PipesModule,
		HomePageModule,
		SlideBoxPageModule,
		GoogleMapsPageModule,
		WordpressModule,
		ComponentsModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
