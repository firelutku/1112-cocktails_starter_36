import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext_36 = React.createContext();

const AppProvider_36 = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try{
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log('drinks',data)
      const { drinks } = data;
      if(drinks) {
        const newCocktails = drinks.map((item)=> {
          const {idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass} = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails);
      }else{
        setCocktails([]);
      }
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext_36.Provider value={{loading,cocktails,searchTerm,setSearchTerm}}>{children}</AppContext_36.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext_36);
};

export { AppContext_36, AppProvider_36 };
