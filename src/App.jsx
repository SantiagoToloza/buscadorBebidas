import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

import { CategoriasProvider } from "../src/context/CategoriaProvider";
import { BebidasProvider } from "./context/BebidasProvider";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";

const App = () => {
  return (
    <BebidasProvider>
      <CategoriasProvider>
        <header className="py-5">
          <h1>Buscador de bebidas </h1>
        </header>
        <Container className="mt-5">
          <Formulario></Formulario>
          <ListadoBebidas />
          <ModalBebida />
        </Container>
      </CategoriasProvider>
    </BebidasProvider>
  );
};
export default App;
