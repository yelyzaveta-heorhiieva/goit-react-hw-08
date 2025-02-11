import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css'
import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors.js'
import Layout from "./components/Layout.jsx";
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from "./components/RestrictedRoute.jsx";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLogIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLogIn) {
      dispatch(refreshUser());
    }
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
          />
           <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
