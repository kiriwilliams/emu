import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NewNote from "./components/NewNote/NewNote.js";

function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
      <NewNote />
    </div>
  );
}

export default App;
