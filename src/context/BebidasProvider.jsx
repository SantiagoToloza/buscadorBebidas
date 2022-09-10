import axios from "axios";
import { createContext, useState } from "react";
const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState([]);
  const [cargando, setCargando] = useState(false)
  const handleModalClick = () => {
    setModal(!modal);
  };

  const consultarInfo = async (id) => {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    console.log(url);
    setCargando(true)
    try {
      const {data} = await axios(url)
      setInfo(data.drinks[0])
    } catch (error) {
      console.log(error)
    } finally{
      setCargando(false)
    }
  };

  const consultarBebidas = async (datos) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
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
        cargando
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };
export default BebidasContext;
