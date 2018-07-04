import React from 'react';
import PropTypes from 'prop-types';

const RewardName = props => <h2>{props.name}</h2>;

RewardName.propTypes = {
  description: PropTypes.string.isRequired,
};

export default RewardName;
