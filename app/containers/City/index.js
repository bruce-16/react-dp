import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from '../../components/Header';

export default class City extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  handleBack(){
    this.props.history.goBack();
  }
  render(){
    return (
      <div>
        <Header title='请选择城市' handleBack={this.handleBack.bind(this)}/>
      </div>
    );
  }
}