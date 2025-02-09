import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import * as Yup from "yup";
import s from '../ContactForm/ContactForm.module.css'

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password:''
  }

  const handleSubmit = (values, actions) => {
    dispatch(logIn({
      email: values.email.trim(),
      password: values.password.trim()
    }))
    actions.resetForm();
  }

  const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email('Incorrect email').required("Required"),
  password: Yup.string().min(6, "Must contain at least 6 characters").required("Required"),
});

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={s.form}>
          <label className={s.label}>
            Email
            <Field type="email" name="email" className={s.input} />
            <ErrorMessage className={s.error} name="email" component="span" />
          </label>
          <label className={s.label}>
            Password
            <Field type="password" name="password" className={s.input} />
            <ErrorMessage className={s.error} name="password" component="span" />
          </label>
          <button className={s.btn} type='submit'>Log in</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm
