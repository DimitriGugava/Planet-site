import React from "react";
import "./App.css";
import Planets from "./Planets/Planets";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/planets/:planet" component={Planets} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
