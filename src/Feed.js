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
                {this.props.route.data.posts.map((post, index) =>
                    <div key = {index}>
                        <Post post={post} />
                    </div>
                )
                }
            </div>
        );
    }
}

class Post extends Component{
    render(){
        return(
            <p className="App-intro">
                Author = {this.props.post.author} en message = {this.props.post.message}
            </p>
        )
    }
}

export default Feed;
