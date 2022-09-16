import Dropdown from "react-bootstrap/Dropdown";
import { AiFillDelete } from "react-icons/ai";
import useBebidas from "../hooks/useBebidas";
const Favoritos = () => {
  const { favoritos, handleModalClick, consultarInfo, eliminarFavoritos } =
    useBebidas();

  return (
    <Dropdown className="d-flex justify-content-end w-full container ">
      <Dropdown.Toggle
        variant="warning"
        id="dropdown-basic"
        className="text-secondary"
      >
        favoritos
      </Dropdown.Toggle>

      <Dropdown.Menu className="row">
        {favoritos.map((favorito) => (
          <div className="row">
              <AiFillDelete
                onClick={() => eliminarFavoritos(favorito)}
                className="col w-1/2 mt-2 text-danger"
              />
            <Dropdown.Item
              href="#/action-1"
              key={favorito.idDrink}
              onClick={() => {
                handleModalClick();
                consultarInfo(favorito.idDrink);
              }}
              className="col w-1/2 "
            >
              {favorito.strDrink}{" "}
            </Dropdown.Item>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default Favoritos;
