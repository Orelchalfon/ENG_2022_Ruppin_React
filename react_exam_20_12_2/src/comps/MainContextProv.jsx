import React, { createContext } from 'react'

import  "./styleMain.css"
export const mainContext=createContext();

export default function MainContextProv(props) {
  const getInpChang=(e)=>{
    const {value}=e.target
    return value
  }
const setResult=(result)=>{
  
}
  return (
 <mainContext.Provider value={{getInpChang,setResult}}>
  {props.children}
 </mainContext.Provider>
  )
}
