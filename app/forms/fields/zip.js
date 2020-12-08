import requiredFieldErrorSelector from '../errorSelectors/requiredField';
import zipLengthErrorSelector from '../errorSelectors/zipLength';
import zipFormatErrorSelector from '../errorSelectors/zipFormat';

export default {
  key: 'zip',
  label: 'Zip',
  initialValue: '',
  initialError: [],
  errorSelector: {
    requiredField: requiredFieldErrorSelector,
    zipLength: zipLengthErrorSelector,
    zipFormat: zipFormatErrorSelector,
  },
};
