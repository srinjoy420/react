
import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const Chai=(props)=>{
    console.log(props);
    
    return React.createElement("div",{},
        [
            React.createElement("h1",{},props.name),
            React.createElement("p",{},props.cost),
        ]
    )
}

const App=()=>{
    return React.createElement(
        "div",
        {class:"test"},//attributes
        // React.createElement(
        //     "h1",
        //     {},
        //     "chai chill react-19"
        // )
        [
            React.createElement("h1",{},"Chai variations"),
            React.createElement(Chai,{
                name:"Masala Chai",
                cost:"15"
            }),
            React.createElement(Chai,{
                 name:"cutting Chai",
                cost:"15"
            })
        ]
    )

}
const Container=document.getElementById("root");
const root=ReactDOM.createRoot(Container);
root.render(React.createElement(App))