import React, {Component} from 'react';
import axios from "axios";
import Account from '../Account';
import Reward from '../Reward';
import './style.scss';

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
          <ul className="rewards__list">
            <Reward />
          </ul>
        </div>
      </div>
    );
  }
}

export default Rewards;
