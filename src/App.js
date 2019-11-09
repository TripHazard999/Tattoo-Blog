import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Culture from "./Components/Culture/Culture";
import TattooStyles from "./Components/TattooStyles/TattooStyles";
import Login from "./Components/Login/Login";
import TattooStylesInfo from "./Components/TattooStyles/TatooStylesInfo";
import MOCK_DATA from "./Components/DataFiles/MOCK_DATA";

export default function App() {
  return (
    <Router>
      <ul className="navmenu">
        <Link to="/" className="navitem">
          Home
        </Link>
        <Link to="/culture" className="navitem">
          Culture
        </Link>
        <span className="navitem pagename">#INKED</span>
        <Link to="/tattoostyles" className="navitem">
          Tattoo Styles
        </Link>
        <Link to="/login" className="navitem">
          Login
        </Link>
      </ul>

      <Switch>
        <Route path="/culture">
          <Culture />
        </Route>
        <Route exact path="/tattoostyles" >
          <TattooStyles />
        </Route>
        <Route exact path="/tattoostyles/:styleId" >
          <TattooStylesInfo />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
