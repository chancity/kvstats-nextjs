import requiredFieldErrorSelector from '../errorSelectors/requiredField';

export default {
  key: 'address',
  label: 'Address',
  initialValue: '',
  initialError: [],
  errorSelector: {
    requiredField: requiredFieldErrorSelector,
  },
};
