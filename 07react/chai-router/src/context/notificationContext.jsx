import { createContext,useContext,useState } from "react";

const NotifinationContext=createContext()

export function NotificationProvider({children}){
    const[count,setCount]=useState(0)
    const addNotification=()=>{
        setCount((prev)=>prev+1)
    }
     const resetnotification=()=>{
        setCount(0)
    };
    return(
        <NotifinationContext.Provider value={{count,addNotification,resetnotification}}>
            {children}

        </NotifinationContext.Provider>
    )
}
//custom hooks
export function useNotification(){
    return useContext(NotifinationContext)
}