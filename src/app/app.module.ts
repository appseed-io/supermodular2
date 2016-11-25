import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { WordpressItemPage } from '../pages/wordpress/item/wordpress.item.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
import { HomePage } from '../pages/home/home.page';
import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';
import { ComponentsInputsStackedLabelsPage } from '../pages/components/inputs/stacked-labels/components.inputs.stacked-labels.page';
import { ComponentsInputsPlaceholderLabelsPage } from '../pages/components/inputs/placeholder-labels/components.inputs.placeholder-labels.page';
import { ComponentsInputsInsetLabelsPage } from '../pages/components/inputs/inset-labels/components.inputs.inset-labels.page';
import { ComponentsInputsInlineLabelsPage } from '../pages/components/inputs/inline-labels/components.inputs.inline-labels.page';
import { ComponentsInputsFloatingLabelsPage } from '../pages/components/inputs/floating-labels/components.inputs.floating-labels.page';
import { ComponentsInputsFixedLabelsPage } from '../pages/components/inputs/fixed-labels/components.inputs.fixed-labels.page';
import { ComponentsInputsListPage } from '../pages/components/inputs/components.inputs-list.page';
import { ComponentsIconsPage } from '../pages/components/icons/components.icons.page';
import { ComponentsGridPage } from '../pages/components/grid/components.grid.page';
import { ComponentsGesturesPage } from '../pages/components/gestures/components.gestures.page';
import { ComponentsFloatingActionButtonsPage } from '../pages/components/floating-action-buttons/components.floating-action-buttons.page';
import { ComponentsCheckboxPage } from '../pages/components/checkbox/components.checkbox.page';
import { ComponentsCardsPage } from '../pages/components/cards/components.cards.page';
import { ComponentsButtonsPage } from '../pages/components/buttons/components.buttons.page';
import { ComponentsBadgesPage } from '../pages/components/badges/components.badges.page';
import { ComponentsAlertsPage } from '../pages/components/alerts/components.alerts.page';
import { ComponentsActionSheetPage } from '../pages/components/actionsheet/components.actionsheet.page';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
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
		ComponentsInputsStackedLabelsPage,
		ComponentsInputsPlaceholderLabelsPage,
		ComponentsInputsInsetLabelsPage,
		ComponentsInputsInlineLabelsPage,
		ComponentsInputsFloatingLabelsPage,
		ComponentsInputsFixedLabelsPage,
		ComponentsInputsListPage,
		ComponentsIconsPage,
		ComponentsGridPage,
		ComponentsGesturesPage,
		ComponentsFloatingActionButtonsPage,
		ComponentsCheckboxPage,
		ComponentsCardsPage,
		ComponentsButtonsPage,
		ComponentsBadgesPage,
		ComponentsAlertsPage,
		ComponentsActionSheetPage,
		ComponentsListPage,

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
		GoogleMapsPage,
		ComponentsInputsStackedLabelsPage,
		ComponentsInputsPlaceholderLabelsPage,
		ComponentsInputsInsetLabelsPage,
		ComponentsInputsInlineLabelsPage,
		ComponentsInputsFloatingLabelsPage,
		ComponentsInputsFixedLabelsPage,
		ComponentsInputsListPage,
		ComponentsIconsPage,
		ComponentsGridPage,
		ComponentsGesturesPage,
		ComponentsFloatingActionButtonsPage,
		ComponentsCheckboxPage,
		ComponentsCardsPage,
		ComponentsButtonsPage,
		ComponentsBadgesPage,
		ComponentsAlertsPage,
		ComponentsActionSheetPage,
		ComponentsListPage
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
