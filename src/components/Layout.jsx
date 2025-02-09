import { Suspense } from 'react';
import AppNav from './AppNav/AppNav';


const Layout = ({ children }) => {
  return (
    <div>
      <AppNav />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  )
}

export default Layout
