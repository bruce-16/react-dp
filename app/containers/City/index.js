import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {updateUserInfo} from '../../actions/userInfo.action';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import localStore from '../../until/localStore';
import {CITYNAME} from '../../config/localSotre.config';
class City extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  handleBack(){
    this.props.history.goBack();
  }
  cityListClick(cityName){
    localStore.setItem(CITYNAME, cityName);
    this.props.updateCityName(cityName);
  }
  render(){
    return (
      <div>
        <Header title='请选择城市' handleBack={this.handleBack.bind(this)}/>
        <CurrentCity cityName={this.props.cityName}/>
        <CityList onClick={this.cityListClick.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cityName: state.userInfo.cityName
});

const mapDispatchToProps = dispatch => ({
  updateCityName: cityName => dispatch(updateUserInfo({cityName}))
})

const reduxApp = connect(mapStateToProps,mapDispatchToProps)(City);

export default reduxApp;