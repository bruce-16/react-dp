import React,{Component} from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';
import styles from './styles.less';
import Item from './Item';

class ListComponent extends Component{
  
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureMixinRender.shouldComponentUpdate;
  }

  render(){
    return (
      <div className={styles.listContainer}>
      {this.props.data.map((item, index) => {
        return <Item key={`list-${index}`} data={item} />
      })}
      </div>
    );
  }
}
export default ListComponent;