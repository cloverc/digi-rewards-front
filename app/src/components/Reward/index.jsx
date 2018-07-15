import React, { Component } from 'react';
import axios from 'axios';
import MerchantLogo from '../MerchantLogo';
import RewardDescription from '../RewardDescription';
import RewardProgress from '../RewardProgress';
import TransactionCounter from '../TransactionCounter';
import BigTick from '../BigTick';
import './style.scss';

const REWARD_TARGET = 9;

class Reward extends Component {

  constructor(props) {
    super(props);

    this.state = {
      /* account: [{
      id: '',
      description: '',
      created: '',
      type: ''
      }] */
      total: 0,
    };
  }

  componentDidMount() {
    this.setState({ total: 9 });
  }

  render() {
    return (
      <React.Fragment>
        <li className="reward-item">
          <MerchantLogo logo="https://mondo-logo-cache.appspot.com/twitter/nuffieldhealth/?size=large" />
          <div className="nested-items">
            <RewardDescription description="Reward Description" />
            <RewardProgress percent={Math.round(this.state.total * 100) / REWARD_TARGET} />
          </div>
          {/* { if (REWARD_TARGET === this.state.total)} */}
          <TransactionCounter total={9} />
          <BigTick />
        </li>
        <li className="reward-item">
          <MerchantLogo logo="https://mondo-logo-cache.appspot.com/twitter/nuffieldhealth/?size=large" />
          <div className="nested-items">
            <RewardDescription description="Reward Description blah blah get a free coffee" />
            <RewardProgress percent={this.state.total} />
          </div>
          <TransactionCounter total={3} />
        </li>
      </React.Fragment>
    );
  }
}

export default Reward;
