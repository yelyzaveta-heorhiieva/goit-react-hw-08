import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import s from './AppNav.module.css'


const AppNav = () => {
 const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}

export default AppNav
