import { useState, useEffect } from "react" //hooks

export function AllChai() {
    const [menu, setMenu] = useState([])
    const [err, Seterr] = useState("")

    useEffect(() => {
        fetch("/allchai")
            .then((res) => res.json())
            .then(data => setMenu(data))
            .catch(err => Seterr(err.message))
    }, [])


    return (
        <div>
            <h2>
                Avalible Chai
            </h2>
            <ul>
                {menu.map((chai)=>(
                    <li key={chai.id}>{chai.name}</li>
                ))} 
            </ul>
            {/* <ul>
                {menu.map((chai, index) => (
                    <li key={index}>{chai}</li> // ✅ Using index as key
                ))}
            </ul> */}


        </div>
    )
}