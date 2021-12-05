import './index.scss';
import {m, createElement} from 'million';
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const fields = document.querySelectorAll('.mdc-text-field');
fields.forEach((e) => new MDCTextField(e));
const titleTextField = document.getElementById('title');
const ingredientTextField = document.getElementById('ingredient');
const bodyTextField = document.getElementById('body');

const button = document.querySelector('.mdc-button');
new MDCRipple(button);

const content = document.getElementById('content');
button.addEventListener('click', () => {
    const title = m('div', {class: 'app-list-item__title'}, [titleTextField.value]);
    const ingredient = m('div', {class: 'app-list-item__ingredient'}, [ingredientTextField.value]);
    const body = m('div', {class: 'app-list-item__body'}, [bodyTextField.value]);
    const cell = createElement(m('li', {class: 'app-list-item'}, [title, ingredient, body]));
    content.appendChild(cell);
});
