import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentsInputsFixedLabelsPage } from './fixed-labels/components.inputs.fixed-labels.page';
import { ComponentsInputsFloatingLabelsPage } from './floating-labels/components.inputs.floating-labels.page';
import { ComponentsInputsInlineLabelsPage } from './inline-labels/components.inputs.inline-labels.page';
import { ComponentsInputsInsetLabelsPage } from './inset-labels/components.inputs.inset-labels.page';
import { ComponentsInputsPlaceholderLabelsPage } from './placeholder-labels/components.inputs.placeholder-labels.page';
import { ComponentsInputsStackedLabelsPage } from './stacked-labels/components.inputs.stacked-labels.page';

@Component({
	templateUrl: 'components.inputs-list.html'
})
export class ComponentsInputsListPage {
	constructor(
		private navCtrl: NavController
	) {
	}

	public fixedLabelsTapped() {
		this.navCtrl.push(ComponentsInputsFixedLabelsPage);
	}

	public floatingLabelsTapped() {
		this.navCtrl.push(ComponentsInputsFloatingLabelsPage);
	}

	public inlineLabelsTapped() {
		this.navCtrl.push(ComponentsInputsInlineLabelsPage);
	}

	public insetLabelsTapped() {
		this.navCtrl.push(ComponentsInputsInsetLabelsPage);
	}

	public placeholderLabelsTapped() {
		this.navCtrl.push(ComponentsInputsPlaceholderLabelsPage);
	}

	public stackedLabelsTapped() {
		this.navCtrl.push(ComponentsInputsStackedLabelsPage);
	}
}
