import React from 'react';
import axios from 'axios';
import './style.scss';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      account: {
        id: '',
        description: '',
        created: '',
      },
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/account')
      .then((response) => {
        this.setState({ account: response.data });
        // adjust data[n] depending on your mongoDB setup
        console.log('account:', response);
      })
      // axios.get('http://127.0.0.1:3000/transaction')
      // .then((response) => {
      //   this.setState({ transaction: response.data });
      //   // adjust data[n] depending on your mongoDB setup
      //   console.log('transaction:', response);
      // })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="monzo-accounts">
          <h1>
            My Rewards
          </h1>
        </div>
        <h2>Hello {this.state.account.description}, here are your rewards...</h2>
      </div>
    );
  }
}

export default Account;
