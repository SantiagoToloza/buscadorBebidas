import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

import { CategoriasProvider } from "../src/context/CategoriaProvider";

const App = () => {
  return (
    <CategoriasProvider>
      <header className="py-5">
        <h1>Buscador de bebidas </h1>
      </header>
      <Container className="mt-5">
        <Formulario></Formulario>
      </Container>

    </CategoriasProvider>
  );
};
export default App;
