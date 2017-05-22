import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

class Home extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return (
      <div>
        <p>Home:{this.props.test}</p>
      </div>
    );
  }
}

const mapStateMapProps = state => ({
  test: state.userInfo.cityName ? state.userInfo.cityName : ''
});

export default connect(mapStateMapProps)(Home);
