// Imporaciones de la libreria de bootstrap que son tablas y estilos prehechas que se utilizan para agilizar el proceso.
import { Table, Spinner } from "react-bootstrap";

// Componente de tabla de categorias que recibe las categorias y el estado de carga como props.
const TablaCategoria = ({ categorias = [], cargando = false }) => {

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
            <th>ID</th>
            <th>Nombre categoria</th>
            <th>Descripcion Categoria</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla */}
        <tbody>
          {/* Mapeo de las categorias para crear una fila por cada categoria. */}
          {categorias.map((categoria) => {
            {/* Retorna una fila por cada categoria con sus datos. */}
            return (
              <tr key={categoria.id_categoria}>
                <td>{categoria.id_categoria}</td>
                <td>{categoria.nombre_categoria}</td>
                <td>{categoria.descripcion_categoria}</td>
                <td>Acción</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

// Exportacion del componente para ser utilizado en otros archivos. 
export default TablaCategoria;

