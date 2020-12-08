export default (fields) =>
  fields.reduce(
    (state, {key, initialValue, initialError}) => ({
      ...state,
      [key]: {
        value: initialValue,
        errors: initialError,
      },
    }),
    {hasErrors: false, validated: false},
  );
