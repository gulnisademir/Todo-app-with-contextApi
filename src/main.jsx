import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SideContextProvider } from './context/SideContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideContextProvider>
    <App />
    </SideContextProvider>
  </React.StrictMode>,
)
