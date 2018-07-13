import React from 'react';
import PropTypes from 'prop-types';
import check from '../../assets/check.gif';
import './style.scss';

const TransactionCounter = props => (
  <div className="reward-item__counter">
    {props.total}
    /9
  </div>
);

TransactionCounter.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TransactionCounter;
