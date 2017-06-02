import React,{Component} from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';
import styles from './styles.less';

class Item extends Component{
  
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureMixinRender.shouldComponentUpdate;
  }

  render(){
    const data = this.props.data;
    return (
      <div>
         <div className={`${styles.listItem} clear-fix`}>
              <div className={`${styles.itemImgContainer} float-left`}>
                  <img src={data.img} alt={data.title}/>
              </div>
              <div className={`${styles.itemContent}`}>
                  <div className={`${styles.itemTitleContainer} clear-fix`}>
                      <span style={{fontSize: 20, color: 'black', fontWeight: 'blod'}} className="float-left">{data.title}</span>
                      <span className="float-right">{data.distance}</span>
                  </div>
                  <span className={`${styles.itemSubTitle}`}>
                      {data.subTitle}
                  </span>
                  <div className={`${styles.itemPriceContainer} clear-fix`}>
                      <span className={`${styles.price} float-left`}>￥{data.price}</span>
                      <span className={`${styles.number} float-right`}>已售{data.mumber}</span>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
export default Item;