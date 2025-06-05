import { useState, useEffect, use } from "react" //hooks
export function ChaiCounter() {
    const [count, setCount] = useState(0)
    const servChai=()=>{
        setCount(prev=>prev+1)
    }
    return (
        <div>
            <h2>
                Chai
            </h2>
            <h2>
                You have served chai {count} chai
            </h2>
            {/* <button onClick={()=>setCount(prev=>prev+1)}>Serve chai</button> */}
            <button onClick={servChai }>
                Chai seve

            </button>
        </div>
    )
}