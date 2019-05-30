import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";

import Jumbotron from "./components/Jumbotron/Jumbotron";
import Nav from "./components/Navbar/Nav";
import About from "./components/About/About";
import Blockquote from "./components/Blockquote/Blockquote";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron/>
        <About/>
        <Blockquote/>
        <Footer/>
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          {/* <Route exact path="/home" component={Home} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
