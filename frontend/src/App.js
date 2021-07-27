import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FavCoffee from "./FavCoffee.js";
import Header from './Header.js'
import Main from './Main.js'
export default function App() {
  return (
    <Router>
      <div>
   <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
           <Main />
          </Route>

          <Route exact path="/favcoffee">
         <FavCoffee />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}