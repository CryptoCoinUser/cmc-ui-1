import { forms } from '../form/forms.js';
import { MkComponent } from '../MkComponent/MkComponent.js';
import { Select } from '../Select/Select.js';
import { TextBox } from '../TextBox/TextBox.js';

Object.assign(MkComponent._mkComponentConstructors, {
	Select,
	TextBox,
});

class ContactForm extends MkComponent {
	init () {
		/* eslint-disable no-magic-numbers */
		forms.constrainInput({
			inputNode: this.phoneNumberTextBox.inputNode,
			allow: [ '-' ],
			positions: [ 3, 7 ],
		});
		/* eslint-enable no-magic-numbers */
	}

	registerEventHandlers () {
		hyperform(this.node, {
			classes: {
				invalid: 'invalid',
				valid: 'valid',
			},
			revalidate: 'onblur',
		});
		this.node.addEventListener('submit', this.handleSubmit.bind(this));
	}

	handleSubmit (event) {
		event.preventDefault();
	}
}

export { ContactForm };
