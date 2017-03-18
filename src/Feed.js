import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router'

class Feed extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    <Link to="/Login">Login</Link>
                </p>
                <p>
                    <Link to="/users/Christiaan">Userpagina van Christiaan</Link>
                </p>
            </div>
        );
    }
}

export default Feed;
