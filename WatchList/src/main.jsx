import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {StoreProvider} from 'easy-peasy'
import {store} from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root') ).render(
  <React.StrictMode>
    <StoreProvider store={store}>
    <App />
    </StoreProvider>
  </React.StrictMode>,
)
