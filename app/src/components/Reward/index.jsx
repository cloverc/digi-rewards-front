import React, { Component } from 'react';
import axios from "axios";
import MerchantLogo from '../MerchantLogo';
import RewardDescription from '../RewardDescription';
import RewardProgress from '../RewardProgress';
import TransactionCounter from '../TransactionCounter';
import './style.scss';

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
      percent: 0,
    };
  }

  componentDidMount() {
    this.setState({ percent: 30 });
  }

  render() {
    return (
      <div className="rewards">
        <li className="reward-item">
          <MerchantLogo />
          <div className="nested-items">
            <RewardDescription description="Reward Description" />
            <RewardProgress percent={60} />
          </div>
          <TransactionCounter noOfTransactions={6} />
        </li>
        <li className="reward-item">
          <MerchantLogo />
          <div className="nested-items">
            <RewardDescription description="Reward Description blah blah get a free coffee" />
            <RewardProgress percent={this.state.percent} />
          </div>
          <TransactionCounter noOfTransactions={3} />
        </li>
      </div>
    );
  }
}

export default Reward;
