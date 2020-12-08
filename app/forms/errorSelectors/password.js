export default (input) => {
  if (!/^(?=.*[A-z])(?=.*[0-9])\S{6,20}$/.test(input))
    return '6-20 characters and include at least 1 number and 1 letter.';
};
