import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ModalRegistroCategoria from '../components/categorias/ModalRegistroCategoria.jsx';

// Importamos el componente TablaCategorias para su funsionamiento.
import TablaCategorias from "../components/categorias/TablaCategorias";

// Importamos el componente CuadroBusquedas para su funcionamiento.
import CuadroBusquedas from "../components/busquedas/CuadroBusqueda";

// Declaramos el componente funcional Categorias.
const Categorias = () => {

  // Definimos los estados necesarios para el componente que extraerán y manejarán las categorías.
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Estado para manejar las categorías filtradas y el texto de búsqueda.
  const [categoriasFiltradas, setCategoriasFiltradas] = useState([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");

  const [orden, setOrden] = useState({ campo: "id_categoria", direccion: "asc" });

  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevaCategoria, setNuevaCategoria] = useState({
    nombre_categoria: '',
    descripcion_categoria: ''
  });

  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    setNuevaCategoria(prev => ({ ...prev, [name]: value }));
  };

  const agregarCategoria = async () => {
    if (!nuevaCategoria.nombre_categoria.trim()) return;

    try {
      const respuesta = await fetch('http://localhost:3000/api/registrarcategoria', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaCategoria)
      });

      if (!respuesta.ok) throw new Error('Error al guardar');

      // Limpiar y cerrar
      setNuevaCategoria({ nombre_categoria: '', descripcion_categoria: '' });
      setMostrarModal(false);
      await obtenerCategorias(); // Refresca la lista
    } catch (error) {
      console.error("Error al agregar categoría:", error);
      alert("No se pudo guardar la categoría. Revisa la consola.");
    }
  };

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


  // Función para obtener las categorías desde la API.
  const obtenerCategorias = async () => {
    // Realizamos una petición fetch a la API para obtener las categorías con el await que significa que esta esperando una respuesta.
    try {
      const respuesta = await fetch("http://localhost:3000/api/categorias");
      // Verificamos si la se obtuvieron las categorías correctamente. si no es así, lanzamos un error.
      if (!respuesta.ok) {
        throw new Error("Error al obtener las categorias");
      }

      // Si la respuesta es correcta, convertimos la respuesta a formato JSON.
      const datos = await respuesta.json();

      // Actualizamos los estados con las categorías obtenidas y desactivamos el estado de carga.
      setCategorias(datos);
      setCategoriasFiltradas(datos);
      setCargando(false);

      // Si hay un error durante la petición, lo capturamos y mostramos el error en la consola.
    } catch (error) {
      console.error(error.message);
      setCargando(false);
    }
  };

  // Función para manejar los cambios en el cuadro de búsqueda y filtrar las categorías.
  const manejarCambioBusqueda = (e) => {
    // Obtenemos el texto con target y realizamos una búsqueda en minúsculas para hacer una búsqueda insensible a mayúsculas/minúsculas.
    const texto = e.target.value.toLowerCase();
    // Actualizamos el estado del texto de búsqueda.
    setTextoBusqueda(texto);

    // Filtramos las categorías basándonos en si el nombre o la descripción de la categoría incluye el texto de búsqueda.
    const filtradas = categorias.filter(
      (categoria) =>
        categoria.nombre_categoria.toLowerCase().includes(texto) ||
        categoria.descripcion_categoria.toLowerCase().includes(texto)
    );
    // Actualizamos el estado de las categorías filtradas.
    setCategoriasFiltradas(filtradas);
  };

  // Usamos useEffect para llamar a la función obtenerCategorias cuando el componente se monta por primera vez.
  useEffect(() => {
    obtenerCategorias();
  }, []);

  // Renderizamos el componente. Es decir, lo que se verá en la pantalla.
  return (
    <>
      {/* Contenedor principal con margen superior */}
      <Container className="mt-4">
        {/* Título de la página */}
        <h4>Categorias</h4>

        {/* Fila para el cuadro de búsqueda su configuracion 
        en tamaño y pasando valores al texto de busqueda */}
        <Row>
          <Col lg={5} md={8} sm={8} xs={7}>
            <CuadroBusquedas
              textoBusqueda={textoBusqueda}
              manejarCambioBusqueda={manejarCambioBusqueda}
            />
          </Col>
          <Col className="text-end">
            <Button
              className="color-boton"
              onClick={() => setMostrarModal(true)}
            >
              + Nueva Categoría
            </Button>
          </Col>

        </Row>

        {/* Componente TablaCategorias para mostrar las categorías filtradas y el spinner para ser utilizados en la ppagina web */}
        <TablaCategorias
          categorias={categoriasFiltradas}
          cargando={cargando}
        />

        <ModalRegistroCategoria
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          nuevaCategoria={nuevaCategoria}
          manejarCambioInput={manejarCambioInput}
          agregarCategoria={agregarCategoria}
        />

      </Container>
    </>
  );
};

export default Categorias;