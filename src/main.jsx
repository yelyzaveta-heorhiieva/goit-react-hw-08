import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "modern-normalize";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from "./redux/store";
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
