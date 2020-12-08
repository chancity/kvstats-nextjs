export default (input) => {
  if (!/^\d{5}?$/.test(input))
    return 'Please enter a valid ZIP Code.';
};
