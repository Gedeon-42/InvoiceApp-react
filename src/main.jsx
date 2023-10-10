import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router.jsx'
import { ContextProvider } from './context/ContextProvide.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <App/>
    </ContextProvider>
 
  </React.StrictMode>,
)
