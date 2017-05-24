import React,{Component} from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import {connect} from 'react-redux';
import styles from './styles.less';
class HomeHeader extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureMixinRender.shouldComponentUpdate;
  }

  onSearchClick(){
    //搜索框被点击的事件
    alert('页面跳转');
  }

  render(){
    let root = classnames(
      "flex",
      "flex-direction-row",
      "flex-justifyContent-center",
      "flex-alignItems-center",
      styles.root
    );
    let leftAndRight = classnames('flex', styles.marginLeft, styles.marginRight);
    let inputContainer = classnames("flex", "flex-1", styles.radius, styles.border, styles.inputContainer,"flex-alignItems-center");
    let input = classnames("flex flex-1", styles.input);
    return (
      <div className={root}>
        <div className={leftAndRight}>
          <span>{this.props.cityName}</span>
          {' '}
          <i className="fa fa-angle-down" style={{marginLeft: 5}}/>
        </div>
        <div className={inputContainer} onClick={ () => {this.onSearchClick()}}>
          <i className="fa fa-search" style={{color: '#333',marginBottom: 5}}/>
          <input type="text" className={input} placeholder="请输入搜索内容" style={{height: '80%'}} disabled/>
        </div>
        <div className={leftAndRight} >
          <i className="fa fa-user" style={{fontSize: 28}}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cityName: state.userInfo.cityName
});

const reduxApp = connect(mapStateToProps)(HomeHeader);

export default reduxApp;