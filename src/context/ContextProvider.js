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
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor ] = useState('#03c907')
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false)

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
  
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };
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
       handleClick,
       screenSize,
       setScreenSize,
       currentColor,
       currentMode, 
       setCurrentColor,
       setCurrentMode,
       themeSettings,
       setThemeSettings,
       setColor, setMode


       }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
