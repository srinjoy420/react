
const App=()=>{
    return React.createElement(
        "div",
        {class:"test"},//attributes
        React.createElement(
            "h1",
            {},
            "chai chill react-18"
        )
    )

}
const Container=document.getElementById("root");
const root=ReactDOM.createRoot(Container);
root.render(React.createElement(App))