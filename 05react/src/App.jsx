
import { useState, useEffect } from "react" //hooks
import { AllChai } from "./allChai";
import { ChaiCounter } from "./chaiorder";
import { useSpecialChai } from "./hooks/useSpecialChai.js";
export function App() {
    const{chai,loading,error}=useSpecialChai()
    const [message, setMessage] = useState(6) //hooks[var,function]
    useEffect(() => {
        fetch(`/api`) // No need for the full localhost:3000 in development
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch(() => setMessage("failed to load"));
    }, []);
    if(loading) return <h2>Loading....</h2>
     if(error) return <h2>error....{error}</h2>
    
    return (
        <div>
            <h1>Welcome to chai code</h1>
            <p>Severing hot chai react</p>
            <h2>{message}</h2>
           <AllChai/>
           <ChaiCounter/>
           <h3>{chai.name}</h3>
           <contactFrom/>
        </div>
    )
}