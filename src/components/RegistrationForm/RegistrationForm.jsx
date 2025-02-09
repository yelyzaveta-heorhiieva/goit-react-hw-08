import { Field, Formik, Form } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { register } from '../../redux/auth/operations'


const RegistrationForm = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password:''
  }

  const handleSubmit = (values, actions) => {
    dispatch(register({
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim()
    }))
    actions.resetForm();
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            Name
            <Field type="text" name="name"/>
          </label>
          <label>
            Email
            <Field type="email" name="email"/>
          </label>
          <label>
            Password
            <Field type="password" name="password"/>
          </label>
          <button type='submit'>Registrate</button>
        </Form>
      </Formik>
    </>
  )
}

export default RegistrationForm
