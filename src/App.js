import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Culture from "./Components/Culture/Culture";
import TattooStyles from "./Components/TattooStyles/TattooStyles";
import Login from "./Components/Login/Login";
import TattooStylesInfo from './Components/TattooStyles/TatooStylesInfo';
import MOCK_DATA from './Components/DataFiles/MOCK_DATA';


export default function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/tattoostyles">Tattoo Styles</Link>
        <Link to="login">Login</Link>
      </ul>

      <Switch>
        <Route path="/culture">
          <Culture />
        </Route>
        <Route path="/tattoostyles" exact>
          <TattooStyles />
        </Route>
        <Route path="/tattoostyles/:styleId" exact>
          <TattooStylesInfo />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <footer>
      {MOCK_DATA.HOME.footer}
      </footer>
    </Router>
  );
}
