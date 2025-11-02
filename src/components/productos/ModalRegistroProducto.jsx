import { Modal, Form, Button } from "react-bootstrap";


const ModalRegistroProducto = ({
  mostrarModal,
  setMostrarModal,
  nuevoProducto,
  manejarCambioInput,
  agregarProducto,
}) => {
  return (
    <Modal 
    backdrop="static"
      show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Nuevo Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="nombreProducto">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              name="nombre_producto"
              value={nuevoProducto.nombre_producto}
              onChange={manejarCambioInput}
              placeholder="Ej: Arroz"
              maxLength={20}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="descripcionProducto">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="descripcion_producto"
              value={nuevoProducto.descripcion_producto}
              onChange={manejarCambioInput}
              placeholder="Descripción opcional (máx. 100 caracteres)"
              maxLength={100}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="precioUnitario">
            <Form.Label>Precio por lb</Form.Label>
            <Form.Control
              type="number"
              name="precio_unitario"
              value={nuevoProducto.precio_unitario}
              onChange={manejarCambioInput}
              placeholder="Ej: 523.00"
              step='0.01'
              min='0'
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="stock">
            <Form.Label>Stock de producto</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={nuevoProducto.stock}
              onChange={manejarCambioInput}
              placeholder="Ej: 50"
              step='0.01'
              min='0'
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setMostrarModal(false)}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={agregarProducto}
          disabled={!nuevoProducto.nombre_producto.trim()}
        >
          Guardar Producto
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegistroProducto;
