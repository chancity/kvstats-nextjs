import React, {useReducer, useEffect} from 'react'
import useCreateFormHooks from '../createForm/react/useCreateFormHook';
import createFormReducer from '../createForm/createFormReducer';
import firstName from '../forms/fields/firstName';
import lastName from '../forms/fields/lastName';
import address from '../forms/fields/address';
import unit from '../forms/fields/unit';
import city from '../forms/fields/city';
import state from '../forms/fields/state';
import zip from '../forms/fields/zip';
import phoneNumber from '../forms/fields/phoneNumber';


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

const Page = () => {
  const [state, dispatch] = useReducer(
    addAddressForm.reducer,
    addAddressForm.initialState
  )

  const {
    changeInput
  } = useCreateFormHooks(
    addAddressForm,
    dispatch
  )

  useEffect(() => {
    console.log(state);
  }, [state])

  return (
    <input
      value={state?.firstName?.value}
      onChange={(e) => {
        changeInput('firstName', e.target.value)
      }}
    />
  );
};

export default Page;
