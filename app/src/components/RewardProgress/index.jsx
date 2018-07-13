import React, { Component } from 'react';
import { Line } from 'rc-progress';
import PropTypes from 'prop-types';

const transition = 'stroke-dashoffset 2.2s ease 0s, stroke 0.6s ease';

const strokeColor = '#fcb415';

// green: #78b348

// const progressClassnames = classNames({
//   'inde-logo': true,
//   'inde-logo--large': large,
// });

const RewardProgress = props => (
  <div className="reward-item__progress">
    <Line percent={props.percent} strokeWidth="6" trailWidth="6" transition={transition} strokeColor={strokeColor} />
  </div>
);


RewardProgress.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default RewardProgress;
