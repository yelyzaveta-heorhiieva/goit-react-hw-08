import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';

const AppBAr = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}

export default AppBAr
