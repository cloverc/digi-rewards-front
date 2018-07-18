import React, { Component } from 'react';
import axios from 'axios';
import Account from '../Account';
import Reward from '../Reward';
import './style.scss';
import Loader from '../Loader';

class Rewards extends Component {

  constructor() {
    super();
    this.state = {
      rewards: [],
      loading: true,
      test: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/transaction')
      .then((response) => {
        this.setState({
          rewards: response.data,
          loading: false,
        });
        // console.log('merchantID: ', this.state.rewards);
      })
      .catch(error => console.log(error));
    this.timer = setInterval(() => this.setState(prevState => ({ test: !prevState.test })), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      rewards, loading,
    } = this.state;

    return (
      <div className="App">
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Account />
            <div className="rewards__container">
              {/* refreshes rewards container every 1 second */}
              { this.state.test }
              <ul className="rewards rewards__list">
                {
                rewards.map(reward => (
                  <Reward
                    key={reward._id}
                    description={reward.description}
                    logo={reward.merchant_logo}
                    count={reward.count}
                  />
                ))
                }
              </ul>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Rewards;
