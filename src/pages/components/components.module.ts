import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ComponentsInputsStackedLabelsPage } from './inputs/stacked-labels/components.inputs.stacked-labels.page';
import { ComponentsInputsPlaceholderLabelsPage } from './inputs/placeholder-labels/components.inputs.placeholder-labels.page';
import { ComponentsInputsInsetLabelsPage } from './inputs/inset-labels/components.inputs.inset-labels.page';
import { ComponentsInputsInlineLabelsPage } from './inputs/inline-labels/components.inputs.inline-labels.page';
import { ComponentsInputsFloatingLabelsPage } from './inputs/floating-labels/components.inputs.floating-labels.page';
import { ComponentsInputsFixedLabelsPage } from './inputs/fixed-labels/components.inputs.fixed-labels.page';
import { ComponentsInputsListPage } from './inputs/components.inputs-list.page';
import { ComponentsIconsPage } from './icons/components.icons.page';
import { ComponentsGridPage } from './grid/components.grid.page';
import { ComponentsGesturesPage } from './gestures/components.gestures.page';
import { ComponentsFloatingActionButtonsPage } from './floating-action-buttons/components.floating-action-buttons.page';
import { ComponentsCheckboxPage } from './checkbox/components.checkbox.page';
import { ComponentsCardsPage } from './cards/components.cards.page';
import { ComponentsButtonsPage } from './buttons/components.buttons.page';
import { ComponentsBadgesPage } from './badges/components.badges.page';
import { ComponentsAlertsPage } from './alerts/components.alerts.page';
import { ComponentsActionSheetPage } from './actionsheet/components.actionsheet.page';
import { ComponentsListPage } from './list/components.list.page';

@NgModule({
	imports: [IonicModule],
	declarations: [
		ComponentsListPage,
		ComponentsActionSheetPage,
		ComponentsAlertsPage,
		ComponentsBadgesPage,
		ComponentsButtonsPage,
		ComponentsCardsPage,
		ComponentsCheckboxPage,
		ComponentsFloatingActionButtonsPage,
		ComponentsGesturesPage,
		ComponentsGridPage,
		ComponentsIconsPage,
		ComponentsInputsListPage,
		ComponentsInputsFixedLabelsPage,
		ComponentsInputsFloatingLabelsPage,
		ComponentsInputsInlineLabelsPage,
		ComponentsInputsInsetLabelsPage,
		ComponentsInputsPlaceholderLabelsPage,
		ComponentsInputsStackedLabelsPage
	],
	entryComponents: [
		ComponentsListPage,
		ComponentsActionSheetPage,
		ComponentsAlertsPage,
		ComponentsBadgesPage,
		ComponentsButtonsPage,
		ComponentsCardsPage,
		ComponentsCheckboxPage,
		ComponentsFloatingActionButtonsPage,
		ComponentsGesturesPage,
		ComponentsGridPage,
		ComponentsIconsPage,
		ComponentsInputsListPage,
		ComponentsInputsFixedLabelsPage,
		ComponentsInputsFloatingLabelsPage,
		ComponentsInputsInlineLabelsPage,
		ComponentsInputsInsetLabelsPage,
		ComponentsInputsPlaceholderLabelsPage,
		ComponentsInputsStackedLabelsPage
	]
})
export class ComponentsModule {

}
