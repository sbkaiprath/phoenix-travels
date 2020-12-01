import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter,Redirect} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.css";
// Add custom css import below this line
import "./index.css";

const app = (<BrowserRouter><App /></BrowserRouter>);

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);