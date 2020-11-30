import React, { Component } from "react";
import "./App.css";
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Layout from './components/Layout'

import Tour from "./pages/Tour";

class App extends Component {

  render() {
    return (
      <div>
     <Router>
       <Route path="/login" component={LoginForm}/>
       <Route path="/register" component={RegisterForm}/>
       <Route path="/home" component={Layout}/>
       <Route path="/tour" component={Tour}/>
     </Router>
      </div>
    );
  }
}

export default App;
