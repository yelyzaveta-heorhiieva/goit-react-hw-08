import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import EditForm from '../../components/EditForm/EditForm'
import { Hourglass } from 'react-loader-spinner'
import s from './ContactsPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import { fetchContacts } from '../../redux/contacts/operations'

const ContactsPage = () => {
const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.content}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      { loading && !error && <Hourglass wrapperClass={s.spinner} colors={['#008000', '#66FF00']}/>}
      {!loading && <ContactList />}
      <EditForm/>
    </div>
  )
}

export default ContactsPage
