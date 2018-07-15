
import React from 'react';
import PropTypes from 'prop-types';

const MerchantLogo = props => (
  <div className="reward-item__logo-container">
    <img className="reward-item__logo" src={props.logo} />
  </div>
);

MerchantLogo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default MerchantLogo;
