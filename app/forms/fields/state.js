import requiredFieldErrorSelector from '../errorSelectors/requiredField';

export default {
  key: 'state',
  label: 'State',
  initialValue: '',
  initialError: [],
  errorSelector: {
    requiredField: requiredFieldErrorSelector,
  },
};
