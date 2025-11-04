import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Importa de forma global los componentes para montarlos directamente en la aplicacion.
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);