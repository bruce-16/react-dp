import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {get} from '../../../fetch/get';

class List extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state = {
      data: '',
      hasMode: false
    }
  }

  componentDidMount(){
    this.getData();
  }

  async getData(){
    try {
      const res = await get(`/api/homelist/${this.props.cityName}/0`);
      const data = await res.json();
      this.handleData(data);
    } catch (error) {
      console.error('首列表获取数据报错, ', error.message)
      // 发生错误
      if (__DEV__) {
          console.error('首列表获取数据报错, ', error.message)
      }
    }
  }

  handleData(data){
    data = data.data;
    this.setState({data});
  }

  render(){
    return (
      <div>
        {this.state.data.length}
      </div>
    );
  }
}

export default List;
