import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';


import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subPage/ad';
class Home extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return (
      <div>
        <HomeHeader
          cityName={this.props.cityName}
          onSearchClick={() => {}}
          onCitySelectClick={() => {}}
        />
        <Category/>
        <div style={{height: '15px', background: '#eee'}}>{/* 分割线 */}</div>
        <Ad/>
      </div>
    );
  }
}

const mapStateMapProps = state => ({
  cityName: state.userInfo.cityName
});

export default connect(mapStateMapProps)(Home);
