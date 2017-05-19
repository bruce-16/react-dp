import React from 'react';
import {Provider} from 'react-redux';
import storeConfigure from './store/storeConfig';
import './style/App.less';
/**
 * 配置redux
 */

import App from './router/routerMap';

export default () => (
  <Provider  store={storeConfigure()}>
    <App/>
  </Provider>
);