import axios from "axios";
import { createContext, useState } from "react";
const BebidasContext = createContext();


const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]); 
  const consultarBebidas = async (datos) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
    try {
      const {data} = await axios(url)
      setBebidas(data.drinks)
    } catch (error) {
      console.log(error);
    }
    const { data } = await axios(url);
    console.log(data);
  };
  return (
    <BebidasContext.Provider value={{ consultarBebidas, bebidas }}>
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };
export default BebidasContext;
