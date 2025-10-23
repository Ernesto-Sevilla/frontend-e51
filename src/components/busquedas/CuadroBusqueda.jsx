import React from "react";
//Imporramos componentes de la libreria de react-bootstrap para crear el cuadro de búsqueda
import { Form, InputGroup } from "react-bootstrap";

// Declara un componente funcional llamado CuadroBusquedas que recibe dos props: textoBusqueda y manejarCambioBusqueda.
const CuadroBusquedas = ({ textoBusqueda, manejarCambioBusqueda }) => {
  return (
    // Define el formato del cuadro de búsqueda utilizando componentes de react-bootstrap.
    <InputGroup className="mb-3" style={{ width: "100%" }}>
      {/* Icono de búsqueda */}
      <InputGroup.Text>
        <i className="bi bi-search"></i>
      </InputGroup.Text>
      {/* Campo de entrada de texto para la búsqueda definiendo 
      carateristicas: Tipo de entrada: text, Cuando no haya nada que salga un texto: 
      Buscar..., y que actualize la tabla con cada cambio en el imput */}
      <Form.Control
        type="text"
        placeholder="Buscar..."
        value={textoBusqueda}
        onChange={manejarCambioBusqueda}
      />
    </InputGroup>
  );
};

export default CuadroBusquedas;
