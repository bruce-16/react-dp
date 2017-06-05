import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.less';

const CurrentCity = ({cityName}) => {
  return (
    <div className={`
      flex 
      ${styles.CurContainer}
      flex-justifyContent-center
      flex-alignItems-center
    `}>{cityName}</div>
  );
}

CurrentCity.propTypes = {
  cityName: PropTypes.string.isRequired
}

export default CurrentCity;