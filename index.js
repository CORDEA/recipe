import './index.scss';
import {MDCTextField} from '@material/textfield';

const fields = document.querySelectorAll('.mdc-text-field');
fields.forEach((e) => new MDCTextField(e));
