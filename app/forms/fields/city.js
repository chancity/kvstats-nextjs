import requiredFieldErrorSelector from '../errorSelectors/requiredField';
import alphabetOnlyErrorSelector from '../errorSelectors/alphabetOnly';

export default {
  key: 'city',
  label: 'City',
  initialValue: '',
  initialError: [],
  errorSelector: {
    requiredField: requiredFieldErrorSelector,
    alphabetOnly: alphabetOnlyErrorSelector,
  },
};
