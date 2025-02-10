import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import s from './EditForm.module.css'
import { IoClose } from "react-icons/io5";
import * as Yup from "yup";
import toast from 'react-hot-toast';
import { editContact } from '../../redux/contacts/operations';
import { closeEditModal } from '../../redux/edit/slice';
import { selectItem } from '../../redux/edit/selectors';
import { selectContacts, selectLoading } from '../../redux/contacts/selectors';


const EditForm = () => {
const dispatch = useDispatch();
  const {name, number, id} = useSelector(selectItem);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);

  const initialValues = {name: name, number: number.split('-').join(''), id};

  const handleSubmit = (values) => {
    const condition = [...contacts].some(contact => {
      const number = contact.number.split('-').join('');
      return +number === +values.number && contact.name.toLowerCase() === values.name.toLowerCase().trim() 
    });
    if (condition) {
      return toast.error('This number already exists, check the correctness of the entered data');
    }
    dispatch(editContact({
           ...initialValues,
           name: values.name.trim(),
           number: handleNumberChange(values.number),   
         }))
		dispatch(closeEditModal())
  };
  
  const handleNumberChange = (value) => {
    const joinValue = `${value.split('-').join('')}`;
    const formatValue = `${joinValue.slice(0, 3)}-${joinValue.slice(3, 6)}-${joinValue.slice(6, 10)}`;
    return formatValue; 
  };
  
    const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").matches(/^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/, 'Enter only letters').required("Required"),
  number: Yup.string().min(10, "Too Short!").max(10, "Too Long!").matches(/^[0-9\-]+$/, 'Enter only numbers').required("Required"),
});
  
    
  return (
    <>
        <button onClick={() => dispatch(closeEditModal())} className={s.closeBtn}><IoClose className={s.closeIcon} /></button>
        <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={FeedbackSchema}>
          <Form className={s.form}>
          <label className={s.label}>Name
            <Field className={s.input} type="text" name="name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>Number
            <Field className={s.input} type="tel" name="number" />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <button className={s.btn} type="submit" disabled={loading}>Edit contact</button>
          </Form>
        </Formik>
    </>
  )
}

export default EditForm
