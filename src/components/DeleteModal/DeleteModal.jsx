import { useDispatch, useSelector } from 'react-redux'
import { selectId } from '../../redux/deleteModal/selectors'
import { deleteContact } from '../../redux/contacts/operations';
import { closeDeleteModal } from '../../redux/deleteModal/slice';
import s from './DeleteModal.module.css'
import clsx from 'clsx';

const DeleteModal = () => {
    const id = useSelector(selectId);
    const dispatch = useDispatch();

     const handleDelete = () => {
         dispatch(deleteContact(id))
         dispatch(closeDeleteModal())
  }

  return (
    <>
      <p className={s.text}>Do you want to delete contact?</p>
      <ul className={s.btnList}>
        <li><button type='button' onClick={handleDelete} className={clsx(s.btn, s.green)}>Yes</button></li>
        <li><button type='button' onClick={() => dispatch(closeDeleteModal())} className={clsx(s.btn, s.red)}>No</button></li>
      </ul>
    </>
  )
}

export default DeleteModal
