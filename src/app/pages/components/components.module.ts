import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActionsheetPage } from './actionsheet/actionsheet.page';
import { AlertsPage } from './alerts/alerts.page';
import { BadgesPage } from './badges/badges.page';
import { ComponentsListPage } from './list/components.list.page';
import { ButtonsPage } from './buttons/buttons.page';
import { CardsPage } from './cards/cards.page';
import { CheckboxPage } from './checkbox/checkbox.page';
import { FloatingActionButtonsPage } from './floating-action-buttons/floating-action-buttons.page';
import { GesturesPage } from './gestures/gestures.page';
import { GridPage } from './grid/grid.page';
import { IconsPage } from './icons/icons.page';
import { InputsListPage } from './inputs/inputs-list.page';
import { InputsPlaceholderLabelsPage } from './inputs/placeholder-labels/inputs.placeholder-labels.page';
import { InputsStackedLabelsPage } from './inputs/stacked-labels/inputs.stacked-labels.page';
import { InputsInsetLabelsPage } from './inputs/inset-labels/inputs.inset-labels.page';
import { InputsInlineLabelsPage } from './inputs/inline-labels/inputs.inline-labels.page';
import { InputsFloatingLabelsPage } from './inputs/floating-labels/inputs.floating-labels.page';
import { InputsFixedLabelsPage } from './inputs/fixed-labels/inputs.fixed-labels.page';

const routes: Routes = [
	{
		path: '',
		component: ComponentsListPage
	},
	{
		path: 'actionsheet',
		component: ActionsheetPage
	},
	{
		path: 'alerts',
		component: AlertsPage
	},
	{
		path: 'badges',
		component: BadgesPage
	},
	{
		path: 'buttons',
		component: ButtonsPage
	},
	{
		path: 'cards',
		component: CardsPage
	},
	{
		path: 'checkbox',
		component: CheckboxPage
	},
	{
		path: 'floating-action-buttons',
		component: FloatingActionButtonsPage
	},
	{
		path: 'gestures',
		component: GesturesPage
	},
	{
		path: 'grid',
		component: GridPage
	},
	{
		path: 'icons',
		component: IconsPage
	},
	{
		path: 'inputs',
		component: InputsListPage
	},
	{
		path: 'inputs-fixed-labels',
		component: InputsFixedLabelsPage
	},
	{
		path: 'inputs-floating-labels',
		component: InputsFloatingLabelsPage
	},
	{
		path: 'inputs-inline-labels',
		component: InputsInlineLabelsPage
	},
	{
		path: 'inputs-inset-labels',
		component: InputsInsetLabelsPage
	},
	{
		path: 'inputs-placeholder-labels',
		component: InputsPlaceholderLabelsPage
	},
	{
		path: 'inputs-stacked-labels',
		component: InputsStackedLabelsPage
	},
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		ActionsheetPage,
		AlertsPage,
		BadgesPage,
		ButtonsPage,
		CardsPage,
		CheckboxPage,
		FloatingActionButtonsPage,
		GesturesPage,
		GridPage,
		IconsPage,
		InputsListPage,
		InputsFixedLabelsPage,
		InputsFloatingLabelsPage,
		InputsInlineLabelsPage,
		InputsInsetLabelsPage,
		InputsPlaceholderLabelsPage,
		InputsStackedLabelsPage,
		ComponentsListPage
	]
})
export class ComponentsModule {}
