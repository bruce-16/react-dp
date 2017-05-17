import React,{Component} from 'react';
import {render} from 'react-dom';
import './style/index.less';


const App = () => (
  <p>hello react!</p>
);



render(
  <App/>,
  document.getElementById('root')
);