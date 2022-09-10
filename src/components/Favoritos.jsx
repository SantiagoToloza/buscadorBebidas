import Dropdown from "react-bootstrap/Dropdown";

import useBebidas from "../hooks/useBebidas";
const Favoritos = () => {
  const {favoritos,handleModalClick,consultarInfo} = useBebidas();

 
  return (
    <Dropdown className="d-flex justify-content-end w-full ">
      <Dropdown.Toggle
        variant="warning"
        id="dropdown-basic"
        className="text-secondary"
      >
        favoritos
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {favoritos.map((favorito) => (
          <Dropdown.Item href="#/action-1" key={favorito.idDrink} onClick={() => {
            handleModalClick();
            consultarInfo(bebida.idDrink);
          }}>{favorito.strDrink} </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default Favoritos;
