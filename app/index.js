import React,{Component} from 'react';
import {render} from 'react-dom';
import './style/index.css';


const App = () => (
  <p>hello world!</p>
);



render(
  <App/>,
  document.getElementById('root')
);