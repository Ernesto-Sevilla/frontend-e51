
import React, { useState } from "react";
// Imporaciones de la libreria de bootstrap que son tablas y estilos prehechas que se utilizan para agilizar el proceso.
import { Table, Spinner, Button } from "react-bootstrap";
import BotonOrden from "../ordenamiento/BotonOrden.jsx";

import PropTypes from "prop-types";

const TablaCategoria = ({ categorias, cargando, abrirModalEdicion, abrirModalEliminacion }) => {

  // ----------------------------------------------------------------------------------------------
  // Componente de tabla de categorias que recibe las categorias y el estado de carga como props.
  const [orden, setOrden] = useState({ campo: "id_categoria", direccion: "asc" });



  const manejarOrden = (campo) => {
    setOrden((prev) => ({
      campo,
      direccion:
        prev.campo === campo && prev.direccion === "asc" ? "desc" : "asc",
    }));
  };

  const categoriasOrdenadas = [...categorias].sort((a, b) => {
    const valorA = a[orden.campo];
    const valorB = b[orden.campo];

    if (typeof valorA === "number" && typeof valorB === "number") {
      return orden.direccion === "asc" ? valorA - valorB : valorB - valorA;
    }

    const comparacion = String(valorA).localeCompare(String(valorB));
    return orden.direccion === "asc" ? comparacion : -comparacion;
  });

  // --------------------------------------------------------------------------------------------

  // Si el estado de carga es verdadero muestra un spinner de carga. (No es necesario escribir === ya que el if por si solo actua si la condicion es verdadera).
  if (cargando) {
    //Si en caso de ser verdadera la condicion, retorna el spinner de carga para mostrarlo al ususario.
    return (
      <>
        {/* Spinner de carga de react-bootstrap. Para mostrar que se esta cargando la informacion. */}
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </>
    );
  }
  // Si no esta cargando, muestra la tabla con las categorias.
  return (
    //Codigo extraido de react-bootstrap para crear una tabla con estilos predefinidos. Para agilizar el proceso.
    <>
      <Table striped bordered hover>
        {/* Definicion del encabezado de la tabla */}
        <thead>
          <tr>
            {/* Definicion de las columnas de la tabla. */}
            <th>
              <BotonOrden campo="id_categoria" orden={orden} manejarOrden={manejarOrden}>
                ID
              </BotonOrden>
            </th>
            <th>
              <BotonOrden campo="nombre_categoria" orden={orden} manejarOrden={manejarOrden}>
                Nombre Categoría
              </BotonOrden>
            </th>
            <th>
              <BotonOrden campo="descripcion_categoria" orden={orden} manejarOrden={manejarOrden}>
                Descripción Categoría
              </BotonOrden>
            </th>
            <th>
              Acciones
            </th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla */}
        <tbody>
          {/* Mapeo de las categorias para crear una fila por cada categoria. */}
          {categoriasOrdenadas.map((categoria) => {
            {/* Retorna una fila por cada categoria con sus datos. */ }
            return (
              <tr key={categoria.id_categoria}>
                <td>{categoria.id_categoria}</td>
                <td>{categoria.nombre_categoria}</td>
                <td>{categoria.descripcion_categoria}</td>
                <td>
                  <Button
                    variant="outline-warning"
                    size="sm"
                    className="me-2"
                    onClick={() => abrirModalEdicion(categoria)}
                  >
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => abrirModalEliminacion(categoria)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>

              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

TablaCategoria.propTypes = {
  categorias: PropTypes.arrayOf(
    PropTypes.shape({
      id_categoria: PropTypes.number.isRequired,
      nombre_categoria: PropTypes.string.isRequired,
      descripcion_categoria: PropTypes.string,
    })
  ).isRequired,
  cargando: PropTypes.bool.isRequired,
};

// Exportacion del componente para ser utilizado en otros archivos. 
export default TablaCategoria;

