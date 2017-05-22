import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Home from '../containers/Home';
import User from '../containers/User';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
import City from '../containers/City';
import NotFound from '../containers/404Page';

import localStore from '../until/localStore';
import {CITYNAME} from '../config/localSotre.config';

import {connect} from 'react-redux';
import {updateUserInfo} from '../actions/userInfo.action';

class App extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state = {
      initialDone: false
    }
  }

  componentDidMount(){
    //从localStore中获取到城市名称
    let cityName = '';
    cityName = localStore.getItem(CITYNAME);
    if(cityName == null){
      cityName = '北京';
    }

    //将数据存入redux
    this.props.updateInfo({cityName});
    this.setState({initialDone: true});
  }

  render(){
    //路由的声明.
    let Routes = (
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/user'  component={User}/>
        <Route path='/search'  component={Search}/>
        <Route path='/detail'  component={Detail}/>
        <Route path='/city'  component={City}/>
        <Route component={NotFound}/>
      </Switch>
    );
    return (
      <Router>
        <div>
          {/**
           * 这里可以公共的样式,比如 头部, 尾部, 等.
           */}
          {this.state.initialDone ? Routes : (<div>加载中...</div>)}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateInfo: data => dispatch(updateUserInfo(data))
});

const reduxApp = connect(mapStateToProps,mapDispatchToProps)(App);

export default reduxApp;