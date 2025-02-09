import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { FaUserCog } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import s from "./UserMenu.module.css"
import clsx from 'clsx';
import { useEffect, useState } from 'react';


const UserMenu = () => {
  const [modalClass, setModalClass] = useState(s.modal)
  const [triger, setTriger] = useState(false)
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isTab = useMediaQuery({ query: '(min-width: 768px)' })
 

  useEffect(() => {
 setModalClass(clsx(s.modal, triger && s.active))
  }, [triger])


  return (
    <>
      {!isTab && <button type='button' className={clsx(s.burgerBtn)} onMouseEnter={() => setTriger(true)}
        onTouchStart={() => setTriger(true)} onTouchEnd={() => !isTab  && setTriger(false)}>
        <FaUserCog className={s.burger} />
      </button>}
      <div className={!isTab ? modalClass : s.menu} onMouseLeave={() => !isTab && setTriger(false)}>
        <p className={s.greetings}>Welcome, {user.name}</p>
        <button className={s.logOutBtn} type="button" onClick={() => dispatch(logOut())}>
          Log out
        </button>
      </div>
    </>
  );
}

export default UserMenu
