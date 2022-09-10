import { Row } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

import Bebida from "./Bebida";
const ListadoBebidas = () => {
  const { bebidas, info } = useBebidas();
  return (
    <Row>
      {bebidas.map((bebida) => (
        <Bebida bebida={bebida} key={bebida.idDrink} info={info}></Bebida>
      ))}
    </Row>
  );
};
export default ListadoBebidas;
