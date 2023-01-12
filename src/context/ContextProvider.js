import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  
  const [isActiveMenu, setIsActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

    const handleClick = (clicked) =>{
        setIsClicked({...initialState,[clicked]:true})
    }



  

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
     value={{  isActiveMenu,
       setIsActiveMenu,
       isClicked,
       setIsClicked,
       handleClick

       }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
