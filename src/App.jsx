import { useState } from 'react'
import "./App.css";
import Titulo from './components/Titulo.jsx';
import Mensaje from './components/Mensaje.jsx';

const App = () => {
  return (
    <>
    <h1>Ferreteria Ernesto Sevilla</h1> 
    <Titulo />
    <Mensaje/>
    </>
  );
};


export default App;

