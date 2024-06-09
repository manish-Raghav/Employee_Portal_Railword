import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter } from 'react-router-dom' 
import { Provider } from 'react-redux'
import store from './Component/Project/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store} >
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  
  </React.StrictMode>,
)
