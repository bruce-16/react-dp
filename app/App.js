import React,{Component} from 'react';
import './style/App.less';
/**
 * 以后在这里配置
 * redux的store
 * router
 */

class App extends Component{
  render(){
    let obj = {a:1};
    let obj2 = { ...obj, b: 1};
    return (
      <p>{JSON.stringify(obj2)}</p>
    );
  }
}

export default App;