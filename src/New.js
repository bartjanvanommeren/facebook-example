import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Login extends Component {
    navigateBack() {
        browserHistory.push('/');
    }

    newPost(event) {
        event.preventDefault();
        
        this.props.route.newPost({
            title: event.target.title.value,
            message: event.target.message.value,
            author: this.props.route.data.ingelogdeUser,
            time: new Date().getTime(),
            comments: [],
            likes: []
        });
    }

    render() {
        return (
            <form className="App-login" onSubmit={this.newPost.bind(this)}>
                <label>Title</label>
                <p><input id="title" type="text" /></p>

                <label>Post</label>
                <p><textarea id="message" type="text" rows="3" cols="30" /></p>

                {/*<input message="message" type="text" />*/}
                <button type="submit">Post</button>
                <button onClick={this.navigateBack.bind(this)}>Back</button>
            </form>
        );
    }
}

export default Login;
