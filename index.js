import './index.scss';
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const fields = document.querySelectorAll('.mdc-text-field');
fields.forEach((e) => new MDCTextField(e));
new MDCRipple(document.querySelector('.mdc-button'));
