import axios from "axios";
import { createContext, useState, useEffect } from "react";
const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [favoritos, setFavoritos] = useState([]);
  const [guardarId, setGuardarId] = useState([]);

  const handleModalClick = () => {
    setModal(!modal);
  };

  const eliminarFavoritos = (id) => {
    console.log("eliminado", id.idDrink);
    const eliminado = favoritos.filter((elim) => id.idDrink != elim.id);
    setFavoritos(eliminado);
  };

  // const guardarFavoritos = (id) => {
  //   setGuardarId([...guardarId, id.idDrink]);
  //   for (let i = 1; i < guardarId.length; i++) {
  //     if (guardarId.includes(id.idDrink)) {
  //     } else {
  //       setGuardarId([...guardarId, id.idDrink]);
  //       setFavoritos([...favoritos, id]);
  //     }
  //   }
  // };

  const guardarFavoritos = (info) => { 
    if(guardarId.length === 0){
      setGuardarId([...guardarId,info.idDrink])
    }else{
      for(let i = 0 ; i < guardarId.length; i++){
        if(info.idDrink !== guardarId[i]){
          setGuardarId([...guardarId,info.idDrink])
        }else{
          console.log('este no pasa ya esta')
        }
      }
    }
  };

  const consultarInfo = async (id) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    console.log(url);
    setCargando(true);
    try {
      const { data } = await axios(url);
      setInfo(data.drinks[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  const consultarBebidas = async (datos) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.bebida}&c=${datos.categoria}`;
    try {
      const { data } = await axios(url);
      setBebidas(data.drinks);
    } catch (error) {
      console.log(error);
    }
    const { data } = await axios(url);
    console.log(data);
  };
  return (
    <BebidasContext.Provider
      value={{
        consultarBebidas,
        bebidas,
        handleModalClick,
        modal,
        consultarInfo,
        info,
        cargando,
        guardarFavoritos,
        favoritos,
        eliminarFavoritos,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };
export default BebidasContext;
