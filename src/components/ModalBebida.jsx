import { Modal, Image, Card } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useState, useEffect } from "react";

const ModalBebida = () => {
  const {
    modal,
    handleModalClick,
    info,
    cargando,
    guardarFavoritos,
    guardarId,
    eliminarFavoritos
  } = useBebidas();
  const { strDrink, strInstructions, strDrinkThumb, idDrink } = info;
  const [checkHearth, setCheckHearth] = useState(false);
  const mostrarIngredientes = () => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (info[`strIngredient${i}`])
        ingredientes.push(
          <li>
            Ingredient: {info[`strIngredient${i}`]} Cant:{" "}
            {info[`strMeasure${i}`]}{" "}
          </li>
        );
    }
    return ingredientes;
  };

  useEffect(() => {
    guardarId.includes(idDrink) ? (setCheckHearth(true)) : (setCheckHearth(false) ) ;
    console.log(checkHearth);
    console.log(idDrink)

  }, [guardarFavoritos]);

 
 



  return (
    <>
      {!cargando && (
        <Modal show={modal} onHide={handleModalClick}>
          <div className="position-absolute w-full end-0">
            {checkHearth == true ? (
              <MdOutlineFavorite className="fs-1 m-3 text-danger" onClick={()=>eliminarFavoritos(info)}/>
              ) : (
                <MdOutlineFavoriteBorder
                className="fs-1 m-3 text-danger"
                onClick={() => guardarFavoritos(info)}
                />
            )}
          </div>
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
