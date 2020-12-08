import {useCallback} from 'react'

const useCreateFormHooks = (form, dispatch) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const changeInput = useCallback((field, value) => {
    dispatch(form.changeValue(field, value))
  }, [form.changeValue, dispatch])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const validateForm = useCallback(() =>
    dispatch(form.validateForm), [form.validateForm, dispatch])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const invalidateForm = useCallback(() =>
    dispatch(form.invalidateForm), [form.invalidateForm, dispatch])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resetForm = useCallback(() =>
    dispatch(form.resetForm), [form.resetForm, dispatch])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setForm = useCallback((payload) =>
    dispatch(form.setFormFields(payload)), [form.setFormFields, dispatch])

  return {
    changeInput,
    validateForm,
    invalidateForm,
    resetForm,
    setForm
  }
}

export default useCreateFormHooks
