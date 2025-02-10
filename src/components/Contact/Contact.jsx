import { FaUser, FaPhone } from "react-icons/fa6";
import s from './Contact.module.css'
import { useDispatch } from "react-redux";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { openEditModal } from "../../redux/edit/slice";
import { openDeleteModal } from "../../redux/deleteModal/slice";


const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p className={s.text}><FaUser /><span className={s.span}>{name}</span></p>
        <a className={s.text} href={`tel:+${number}`}><FaPhone /><span className={s.span}>{number}</span></a>
      </div>
      <ul className={s.btnList}>
        <li>
          <button className={s.btn} type="button" onClick={() => dispatch(openDeleteModal(id))}>
            <MdDeleteForever className={s.icon} />
          </button>
        </li>
        <li>
          <button className={s.btn} type="button" onClick={() => dispatch(openEditModal({ name, number, id }))}>
            <MdEdit className={s.icon} />
          </button>
        </li>
      </ul>
    </>
  )
}

export default Contact

