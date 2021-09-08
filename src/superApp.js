import React from 'react';
import App from './App';
import Login from './login';

class SuperApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userDetails: {
                name: ""
            }
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(userName) {
        this.setState({ isLoggedIn: true, userDetails: { name: userName } })
    }

    render() {
        return (
            <>
                {this.state.isLoggedIn ? <App userName={this.state.userDetails && this.state.userDetails.name} />
                    : <Login handleLogin={this.handleLogin} />}
            </>
        )
    }
}

export default SuperApp;