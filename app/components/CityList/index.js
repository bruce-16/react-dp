import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';

const CityList = ({onClick}) => {
  return (
    <div className={styles.container}>
      <h2>热门城市</h2>
      <ul className="clear-fix">
        <li>
          <span onClick={() => {onClick('北京')}}>北京</span>
        </li>
        <li>
          <span onClick={() => {onClick('上海')}}>上海</span>
        </li>
        <li>
          <span onClick={() => {onClick('杭州')}}>杭州</span>
        </li>
        <li>
          <span onClick={() => {onClick('广州')}}>广州</span>
        </li>
        <li>
          <span onClick={() => {onClick('苏州')}}>苏州</span>
        </li>
        <li>
          <span onClick={() => {onClick('深圳')}}>深圳</span>
        </li>
        <li>
          <span onClick={() => {onClick('南京')}}>南京</span>
        </li>
        <li>
          <span onClick={() => {onClick('天津')}}>天津</span>
        </li>
        <li>
          <span onClick={() => {onClick('重庆')}}>重庆</span>
        </li>
        <li>
          <span onClick={() => {onClick('厦门')}}>厦门</span>
        </li>
        <li>
          <span onClick={() => {onClick('武汉')}}>武汉</span>
        </li>
        <li>
          <span onClick={() => {onClick('西安')}}>西安</span>
        </li>
      </ul>
    </div>
  );
}; 

export default CityList;