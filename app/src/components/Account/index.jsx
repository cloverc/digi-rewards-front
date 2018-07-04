import React, {Component} from 'react';
import './style.scss';
import axios from "axios";
import TokenManager from '../../utils/token-manager';

class Account extends Component {

    constructor(props) {
        super(props);

        this.state = {
            account: [{
                id: '',
                description: '',
                created: '',
                type: ''
            }]
        }
    }

    componentDidMount() {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + TokenManager.getToken()
            }
        };
        console.log(config);

        axios.get('http://127.0.0.1:3000/account', config).then((response) => {
            this.setState({'account': response.data.accounts});
        });
    }

    render() {
        return (
            <div>
                <div className="monzo-accounts">
                <h1>My Rewards</h1>
                </div>
                <p>
                    Account name:
                    {this.state.account.map(account =>
                        account.description
                    )}
                </p>
            </div>
        );
    }
}

export default Account;
