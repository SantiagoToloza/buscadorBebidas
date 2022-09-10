import { Modal, Image, Card } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
  const { modal, handleModalClick, info } = useBebidas();
  const { strDrink,strIngredient, strInstructions, strDrinkThumb, infostrDrink,strMeasure } = info;

  const mostrarIngredientes = ()=>{
    let ingredientes = []
    for(let i = 1; i < 16 ;i++ ){
      if(info[`strIngredient${i}`])
        ingredientes.push(
          <li>Ingredient: {info[`strIngredient${i}`]} Cant: {info[`strMeasure${i}`]}  </li>
        )
    
    }
    return ingredientes
  }
  return (
    <>
      {info && (
        <Modal show={modal} onHide={handleModalClick}>
          <Image src={strDrinkThumb} alt={`imagen de receta ${strDrink}`} />
          <Modal.Header>
            <Modal.Title>{strDrink} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="p-3">
              <h2>Instrucciones:</h2>
              <p>{strInstructions}</p>
              <h2>Ingredientes y cantidad</h2>
              <p>{mostrarIngredientes()} </p>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default ModalBebida;
