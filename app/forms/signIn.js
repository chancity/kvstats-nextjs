import createFormReducer from '../createForm/createFormReducer';
import password from './fields/password';
import email from './fields/email';

const fields = [email, password];

const _key = 'signIn';

const form = createFormReducer({
  formName: _key,
  fields,
  persist: true,
});

export const key = _key;
export const changeInput = form.changeValue;
export const validateForm = form.validateForm;
export const invalidateForm = form.invalidateForm;
export const resetForm = form.resetForm;
export const setForm = form.setFormFields;
export const reducer = form.reducer;
