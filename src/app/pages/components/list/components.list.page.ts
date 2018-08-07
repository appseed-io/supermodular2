import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components.list',
  templateUrl: './components.list.page.html',
  styleUrls: ['./components.list.page.scss'],
})
export class ComponentsListPage implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	public actionsheetTapped() {
		// this.navCtrl.push(ComponentsActionSheetPage);
	}

	public alertsTapped() {
		// this.navCtrl.push(ComponentsAlertsPage);
	}

	public badgesTapped() {
		// this.navCtrl.push(ComponentsBadgesPage);
	}

	public buttonsTapped() {
		// this.navCtrl.push(ComponentsButtonsPage);
	}

	public cardsTapped() {
		// this.navCtrl.push(ComponentsCardsPage);
	}

	public checkboxTapped() {
		// this.navCtrl.push(ComponentsCheckboxPage);
	}

	public floatingActionButtonsTapped() {
		// this.navCtrl.push(ComponentsFloatingActionButtonsPage);
	}

	public gesturesTapped() {
		// this.navCtrl.push(ComponentsGesturesPage);
	}

	public gridTapped() {
		// this.navCtrl.push(ComponentsGridPage);
	}

	public iconsTapped() {
		// this.navCtrl.push(ComponentsIconsPage);
	}

	public inputsTapped() {
		// this.navCtrl.push(ComponentsInputsListPage);
	}
}
