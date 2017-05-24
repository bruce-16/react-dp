import React,{Component} from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import PropTypes from 'prop-types';



class Category extends Component{
  static propTypes = {

  };

  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureMixinRender.shouldComponentUpdate;
  }

  onSearchClick(){
    //搜索框被点击的事件
    alert('页面跳转');
  }

  render(){

    return (
      <div>Category</div>
    );
  }
}
export default Category;