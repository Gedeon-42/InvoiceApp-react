import { createContext, useContext, useState } from "react";

const StateContext=createContext();

export const ContextProvider=({children})=>{
    const [model,setModal]=useState(true)
    const[invoice,setInvoice]=useState([])
    return (
    <StateContext.Provider value={{model,setModal,invoice,setInvoice}}>
{children}
    </StateContext.Provider>)
}

export const useStateContext =()=>useContext(StateContext)