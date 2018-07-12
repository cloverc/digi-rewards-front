import React from 'react';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TokenManager from '../../utils/token-manager';

import './style.scss';

/* const NavBar = ({ user, isLoggedIn, onLogout }) => (
  <nav className="mzw-nav-container">
    <div className="mzw-nav">
      <Logo />
      <NavLink exact to="/">Home</NavLink>
      <div style={{ display: 'inline-block', float: 'right' }}>
        <span>{user.firstName} {user.lastName}</span>
        <button className="monzo-button" onClick={onLogout}>Logout</button>
      </div>
    </div>
  </nav>
); */

class NavBar extends React.Component {
  logout() {
    TokenManager.removeToken();
    // localStorage.clear();
    window.location.href = '/login';
  }

  render() {
    return (
      <nav className="monzo-nav-container">
        <div className="monzo-nav">
          <Logo />
          <div>
            <NavLink className="nav-link" exact to="/">
              My Rewards
            </NavLink>
            <NavLink className="nav-link" exact to="/Map">
              Near You
            </NavLink>
            <button className="monzo-button logout" onClick={this.logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

/* NavBar.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  isLoggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  user: {
    firstName: '',
    lastName: '',
  },
}; */

export default NavBar;
