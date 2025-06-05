
import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const Chai=()=>{
    return React.createElement("div",{},
        [
            React.createElement("h1",{},"Masala chai"),
            React.createElement("p",{},"Ginger chai"),
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
            React.createElement(Chai),
            React.createElement(Chai)
        ]
    )

}
const Container=document.getElementById("root");
const root=ReactDOM.createRoot(Container);
root.render(React.createElement(App))