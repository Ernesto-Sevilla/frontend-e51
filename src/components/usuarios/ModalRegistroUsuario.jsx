import { Modal, Form, Button } from "react-bootstrap";

const ModalRegistroUsuario = ({
  mostrarModal,
  setMostrarModal,
  nuevoUsuario,
  manejarCambioInput,
  agregarUsuario,
}) => {
  return (
    <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Nuevo Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="usuario">
            <Form.Label>Nombre del usuario</Form.Label>
            <Form.Control
              type="text"
              name="usuario"
              value={nuevoUsuario.usuario}
              onChange={manejarCambioInput}
              placeholder="Ej: Violet"
              maxLength={20}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contraseña">
            <Form.Label>Segundo Nombre del cliente</Form.Label>
            <Form.Control
              type="text"
              name="contraseña"
              value={nuevoUsuario.contraseña}
              onChange={manejarCambioInput}
              placeholder="Ej: 123456789"
              maxLength={20}
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
          onClick={agregarUsuario}
          disabled={!nuevoUsuario.usuario.trim()}
        >
          Guardar Categoría
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegistroUsuario;
