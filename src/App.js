import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Search from "./components/Search/Search";
import Ingredients from "./components/Ingredients/Ingredients";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/:item">
            <Search></Search>
          </Route>
          <Route exact path="/:item/:label">
            <Ingredients></Ingredients>
          </Route>
          <Route exact path="/">
            <Search></Search>
          </Route>
          <Route path="*">
          </Route>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
