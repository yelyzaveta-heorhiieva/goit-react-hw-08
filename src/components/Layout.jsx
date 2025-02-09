import { Suspense } from 'react';
import AppBar from './AppBar/AppNav';


const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  )
}

export default Layout
