import React, {Component} from 'react';
import './style.scss';
import axios from "axios";
import TokenManager from '../../utils/token-manager';

class Rewards extends Component {

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

    /* componentDidMount() {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJlYiI6IjZONXJUTG5nenhrcVlMUjlrbU5QIiwianRpIjoiYWNjdG9rXzAwMDA5WUVhSTFScDRCZHphbUZDdngiLCJ0eXAiOiJhdCIsInYiOiI1In0.eKVAW7FmIBS4skuNWFIxTA3DXnLGqwpomkL-_LjBOZ2VZWqDIYkm7SGLmA7noz4IrSk9afHqjLlnmn62FGNAgA'
            }
        };

        axios.get('https://api.monzo.com/accounts', config).then((response) => {
            this.setState({'account': response.data.accounts});
        });
    } */

    render() {
        return (
            <div className="App">
                <div className="App-header mzw-accounts">
                <h1>My Rewards</h1>
                </div>
                <p className="App-intro">
                    Account name:
                    {this.state.account.map(account =>
                        account.description
                    )}
                </p>
            </div>
        );
    }
}

export default Rewards;
