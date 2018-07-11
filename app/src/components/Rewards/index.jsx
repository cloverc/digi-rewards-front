import React, { Component } from 'react';
import axios from "axios";
// import Loader from '../Loader';
import Account from '../Account';
import Map from '../Map';
import Reward from '../Reward';
import './style.scss';
import Loader from '../Loader';

class Rewards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      /* account: [{
      id: '',
      description: '',
      created: '',
      type: ''
      }] */
    };
  }

  render() {
    return (
      <div className="App">
        <Account />
        <div className="rewards__container">
          <Map />
          <ul className="rewards__list">
            <Reward />
          </ul>
        </div>
      </div>
    );
  }
}

export default Rewards;
