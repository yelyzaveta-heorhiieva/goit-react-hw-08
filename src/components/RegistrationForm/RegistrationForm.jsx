import { Field, Formik, Form, ErrorMessage } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { register } from '../../redux/auth/operations'
import * as Yup from "yup";
import s from '../ContactForm/ContactForm.module.css'


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
      email: values.email.toLowerCase().trim(),
      password: values.password.trim()
    }))
    actions.resetForm();
  }

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(26, "Too Long!").matches(/^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/, 'Enter only letters').required("Required"),
  email: Yup.string().email('Incorrect email').required("Required"),
  password: Yup.string().min(6, "Must contain at least 6 characters").required("Required"),
});

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field type="text" name="name" className={s.input} />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
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
          <button type='submit' className={s.btn}>Registrate</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationForm
