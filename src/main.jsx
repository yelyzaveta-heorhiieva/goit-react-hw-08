import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "modern-normalize";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from "./redux/store";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
       <Toaster
          position="top-right"
          reverseOrder={false}
        />
    </Provider>
  </StrictMode>,
)
