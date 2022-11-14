import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter} from "react-router-dom"
import {HelmetProvider} from "react-helmet-async"

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
    <HashRouter>
      <HelmetProvider >
      <App />
      </HelmetProvider >
    </HashRouter>
   /* </React.StrictMode> */
)

