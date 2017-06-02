import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {get} from '../../../fetch/get';
import ListComponent from '../../../components/ListComponent';
import LoadMore from '../../../components/LoadMore';
class List extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state = {
      data: [],
      hasMore: true,
      loadding: false,
      page: 1  //下一页
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
      // 发生错误
      if (__DEV__) {
          console.error('首列表获取数据报错, ', error.message)
      }
    }
  }

  async loadMore(){
    this.setState({
      loadding: true
    });
    try {
      const res = await get(`/api/homelist/${this.props.cityName}/${this.state.page}`);
      const data = await res.json();
      this.handleData(data);
      this.setState({
        loadding: false,
        page: this.state.page+1
      });
    } catch (error) {
      // 发生错误
      if (__DEV__) {
          console.error('加载更多报错, ', error.message)
      }
    }
  }

  handleData(data){
    let hasMore = data.hasMore;
    data = [...this.state.data,...data.data];
    this.setState({data,hasMore});
  }

  render(){
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          this.state.data.length 
          ?<ListComponent data={this.state.data}/>
          :'加载中...'
        }
        {
          this.state.hasMore
          ? <LoadMore loadding={this.state.loadding} loadMoreFunc={this.loadMore.bind(this)}/>
          : ""
        }
      </div>
    );
  }
}

export default List;
