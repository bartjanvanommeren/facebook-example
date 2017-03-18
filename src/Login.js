import React, { Component } from 'react';
import { Link } from 'react-router'

class Login extends Component {
    login(event){
        event.preventDefault();
        this.props.route.onLogin(event.target.name.value);
    }

    render() {
        return (
            <form className="App-login" onSubmit={this.login.bind(this)}>
                <input name="name" type="text" />
                <button type="submit">Login</button>
                <p>
                    <Link to="/">home</Link>
                </p>
            </form>
        );
    }
}

export default Login;
