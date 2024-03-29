import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./Assets/_style.scss";
import "./Components/Home/style.scss";
import "./Components/Login/style.scss";
import "./Components/Culture/style.scss";
import "./Components/TattooStyles/style.scss";
import "./Components/TattooStylesInfo/style.scss";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
