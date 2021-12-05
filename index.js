import './index.scss';
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const fields = document.querySelectorAll('.mdc-text-field');
fields.forEach((e) => new MDCTextField(e));
const title = document.getElementById('title');
const ingredient = document.getElementById('ingredient');
const body = document.getElementById('body');

const button = document.querySelector('.mdc-button');
new MDCRipple(button);

button.addEventListener('click', () => {
});
