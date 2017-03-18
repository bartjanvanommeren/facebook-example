import React, { Component } from 'react';
import { Link } from 'react-router'

class Login extends Component {
    render() {
        return (
            <form className="App-login">
                <input type="text" />
                <Link to="/" ><input type="button" value="Login" to="/" /></Link>
            </form>
        );
    }
}

export default Login;
