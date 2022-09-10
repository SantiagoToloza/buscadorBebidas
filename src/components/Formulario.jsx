import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";
import Favoritos from "./Favoritos";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { categorias } = useCategorias();
  const { consultarBebidas } = useBebidas();

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta("");
    consultarBebidas(busqueda);
  };

  console.log(busqueda);

  return (
    <>
      <Favoritos />
      <Form onSubmit={enviarFormulario}>
        {alerta && (
          <Alert variant="danger" className="text-center">
            {alerta}{" "}
          </Alert>
        )}
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>nombre de bebidas</Form.Label>
              <Form.Control
                value={busqueda.nombre}
                id="nombre"
                type="text"
                placeholder="EJ: TEQUILA,vodka,etc"
                name="nombre"
                onChange={(e) =>
                  setBusqueda({
                    ...busqueda,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor="categoria"> categoria bebidas</Form.Label>
              <Form.Select
                id="categoria"
                name="categoria"
                value={busqueda.categoria}
                onChange={(e) =>
                  setBusqueda({
                    ...busqueda,
                    [e.target.name]: e.target.value,
                  })
                }
              >
                <option>-Seleccione la categoria</option>
                {categorias.map((categoria) => (
                  <option
                    value={categoria.strCategory}
                    key={categoria.strCategory}
                  >
                    {categoria.strCategory}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3 justify-content-end">
          <Col md={3}>
            <Button
              variant="danger"
              className="text-uppercase w-100"
              type="submit"
            >
              Buscar Bebidas
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default Formulario;
