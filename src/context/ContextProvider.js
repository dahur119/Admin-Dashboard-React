import React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart:false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) =>{
    const [activeMenu, setActive] = useState(true)

    return <StateContext.Provider
    value={(
        activeMenu
        )}

    >
        {children}

    </StateContext.Provider>
}

export const useStateContext = () =>useContext(ContextProvider)