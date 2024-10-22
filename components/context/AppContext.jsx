"use client"
import React,{createContext, useContext, useState} from 'react'


const AppContext = createContext ()

export const AppComponent = ({children})=>{
        const [openSidebar,setOpenSidebar] = useState(false)
    return (
        <AppContext.Provider value={{openSidebar,setOpenSidebar}}>
        {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>  useContext(AppContext)