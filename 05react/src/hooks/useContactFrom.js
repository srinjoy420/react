import { useEffect, useState } from "react";
export function useContractfrom(){
    const[loading,SetLoading]=useState(false)
    const [succesMessage,SetsuccesMessage]=useState(null)
    const [errorMEssage,SetErrorMessage]=useState(null)

    const submitContract=async(fromData)=>{
        SetLoading(true)
        SetsuccesMessage(null) //for fresh start
        SetErrorMessage(null)

        try {
            const res=await fetch("/api",{
                method :"POST",
                headers:{
                    "content-Type":"application/json"
                },
                body:JSON.stringify(fromData)
            })
            const data=await res.json()
            if(!res.ok) throw new Error(data.Error|| "something wrong")
                SetsuccesMessage(data.success|| "message sent")
        } catch (error) {
            console.log(error);
            SetsuccesMessage(error.success|| "message not sent")
            
            
        }
        finally{
            SetLoading(false)
        }
      
    }
      return{
            loading,succesMessage,errorMEssage,submitContract
        }
}