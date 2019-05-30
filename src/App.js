import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Nav from "./components/Navbar/Nav";
import About from "./components/About/About";
import Blockquote from "./components/Blockquote/Blockquote";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

class App extends Component {
  state = {
    user: {},
    loginOpen: false,
    


    
  };

  Loging = () =>{
    // alert("Login");
    this.setState({loginOpen: !this.state.loginOpen});

  }

render(){
  return (
    <Router>
      <div>
        <Nav Login = {this.Loging}/>
        { this.state.loginOpen ? <Login Login={this.Loging}/> : <></>}
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
  )
}
};




export default App;
