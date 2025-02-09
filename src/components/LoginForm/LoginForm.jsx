import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password:''
  }

  const handleSubmit = (values, actions) => {
    dispatch(logIn({
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

export default LoginForm
