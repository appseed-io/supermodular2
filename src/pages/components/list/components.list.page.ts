import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentsActionSheetPage } from '../actionsheet/components.actionsheet.page';
import { ComponentsAlertsPage } from '../alerts/components.alerts.page';
import { ComponentsBadgesPage } from '../badges/components.badges.page';
import { ComponentsButtonsPage } from '../buttons/components.buttons.page';
import { ComponentsCardsPage } from '../cards/components.cards.page';
import { ComponentsCheckboxPage } from '../checkbox/components.checkbox.page';
import { ComponentsFloatingActionButtonsPage } from '../floating-action-buttons/components.floating-action-buttons.page';
import { ComponentsGesturesPage } from '../gestures/components.gestures.page';
import { ComponentsGridPage } from '../grid/components.grid.page';
import { ComponentsIconsPage } from '../icons/components.icons.page';
import { ComponentsInputsListPage } from '../inputs/components.inputs-list.page';

@Component({
	templateUrl: 'components.list.html'
})
export class ComponentsListPage {
	constructor(
		private navCtrl: NavController
	) {
	}

	public actionsheetTapped() {
		this.navCtrl.push(ComponentsActionSheetPage);
	}

	public alertsTapped() {
		this.navCtrl.push(ComponentsAlertsPage);
	}

	public badgesTapped() {
		this.navCtrl.push(ComponentsBadgesPage);
	}

	public buttonsTapped() {
		this.navCtrl.push(ComponentsButtonsPage);
	}

	public cardsTapped() {
		this.navCtrl.push(ComponentsCardsPage);
	}

	public checkboxTapped() {
		this.navCtrl.push(ComponentsCheckboxPage);
	}

	public floatingActionButtonsTapped() {
		this.navCtrl.push(ComponentsFloatingActionButtonsPage);
	}

	public gesturesTapped() {
		this.navCtrl.push(ComponentsGesturesPage);
	}

	public gridTapped() {
		this.navCtrl.push(ComponentsGridPage);
	}

	public iconsTapped() {
		this.navCtrl.push(ComponentsIconsPage);
	}

	public inputsTapped() {
		this.navCtrl.push(ComponentsInputsListPage);
	}
}
