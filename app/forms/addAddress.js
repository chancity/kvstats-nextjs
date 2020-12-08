import createFormReducer from '../createForm/createFormReducer';
import firstName from './fields/firstName';
import lastName from './fields/lastName';
import address from './fields/address';
import unit from './fields/unit';
import city from './fields/city';
import state from './fields/state';
import zip from './fields/zip';
import phoneNumber from './fields/phoneNumber';

const fields = [
  firstName,
  lastName,
  address,
  unit,
  city,
  state,
  zip,
  phoneNumber,
];

const addAddressForm = createFormReducer({
  formName: 'addAddressForm',
  fields
});

export default addAddressForm;
