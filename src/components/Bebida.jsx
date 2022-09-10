import { useContext } from "react";
import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {
  const { cargando, handleModalClick, consultarInfo } = useBebidas();
  return (
    <Col md={2} lg={4}>
      <Card className="mb-4 mt-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />

        <Card.Body>
          <Card.Title className="text-center">{bebida.strDrink} </Card.Title>
          <p className="text-center">{bebida.strGlass} </p>
          <Button
            className="w-100 uppercase mt-2"
            variant={"warning"}
            onClick={() => {
              handleModalClick();
              consultarInfo(bebida.idDrink);
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Bebida;
