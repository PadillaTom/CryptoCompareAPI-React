import React from 'react';
import ReactDOM from 'react-dom';

import {App} from "./Components/App";
import "./CSS/index.css";

// Context:
import {CoinsProvider} from "./Context/CoinsContext"


ReactDOM.render(  
  <CoinsProvider>
    <App />
  </CoinsProvider>
  ,
  document.getElementById('root')
);
