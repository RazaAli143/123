
// import ReactDom from "react-dom"; //this is old method
// ReactDom.render(<h2>Hello World</h2>,document.getElementById("root"));

// this is latest and also called root method
// import React from "react";
// import ReactDOM from "react-dom";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h2>Hello</h2>);

//3
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//3
