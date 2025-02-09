import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import s from './Navigation.module.css'
import clsx from 'clsx';

  const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
    };


const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.navList}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation
