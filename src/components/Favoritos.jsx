import Dropdown from "react-bootstrap/Dropdown";
const Favoritos = () => {
  return (
    <Dropdown className="d-flex justify-content-end w-full ">
      <Dropdown.Toggle variant="warning" id="dropdown-basic" className="text-secondary" >
        Favoritos
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default Favoritos;
