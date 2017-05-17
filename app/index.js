/**
 * 此文件只做做简单的渲染操作,入口文件为App.js
 */
import React from 'react';
import {render} from 'react-dom';
import App from './App';

render(
  <App/>,
  document.getElementById('root')
);