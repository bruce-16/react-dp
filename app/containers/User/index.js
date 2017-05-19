import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default class User extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return (
      <div>
        <p>User</p>
      </div>
    );
  }
}