//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondCounter from "./component/secondCounter.jsx";
let second=0
setInterval(()=>{
    second++
    ReactDOM.createRoot(document.getElementById('app')).render(<SecondCounter numero={second}/>)
},1000)

//render your react application
// ReactDOM.createRoot(document.getElementById('app')).render(<SecondCounter/>);

