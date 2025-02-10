import { useEffect } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import EditForm from '../../components/EditForm/EditForm'
import { Hourglass } from 'react-loader-spinner'
import s from './ContactsPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import { fetchContacts } from '../../redux/contacts/operations'
import DocumentTitle from '../../components/DocumentTitle'
import { selectDeleteModal} from '../../redux/deleteModal/selectors'
import { selectEditModal } from '../../redux/edit/selectors'
import DeleteModal from '../../components/DeleteModal/DeleteModal'
import { closeDeleteModal } from '../../redux/deleteModal/slice'
import Modal from 'react-modal';
import { closeEditModal} from '../../redux/edit/slice'

const ContactsPage = () => {
const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const deleteModal = useSelector(selectDeleteModal);
  const editModal = useSelector(selectEditModal)


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

   Modal.setAppElement('#root');

  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>
      <ContactForm />
      <SearchBox />
      { loading && !error && <Hourglass wrapperClass={s.spinner} colors={['#008000', '#66FF00']}/>}
      {!loading && <ContactList />}
      <Modal
        isOpen={deleteModal || editModal}
        onRequestClose={() => deleteModal ? dispatch(closeDeleteModal()) : dispatch(closeEditModal())}
        className={s.modal}
        overlayClassName={s.overlay}  
      >
        {deleteModal ? <DeleteModal /> : <EditForm/>}
      </Modal>
    </>
  )
}

export default ContactsPage
