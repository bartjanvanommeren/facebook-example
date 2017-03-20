import React, { Component } from 'react';

class Login extends Component {
    newPost(event) {
        event.preventDefault();
        this.props.route.newPost({title: event.target.title.value, message: event.target.message.value});
    }

    render() {
        return (
            <form className="App-login" onSubmit={this.newPost.bind(this)}>
                <input title="title" type="text" />
                <input message="message" type="text" />
                <button type="submit">Post</button>
            </form>
        );
    }
}

export default Login;
