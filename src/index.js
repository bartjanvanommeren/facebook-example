import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App';
import Login from './Login'
import Users from './Users'
import Feed from './Feed'
import New from './New'
import './index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
                ingelogdeUser: "Dev",
                users: ['Bert', 'Ernie', 'Sander', 'Fritz'],
                posts: [{
                    title: "post",
                    message: "Er zit een banaan in mijn oor!",
                    author: "Ernie",
                    time: new Date(100000000),
                    comments: [{
                        message: "Nee Ernie, dat ben ik.",
                        author: "Bert",
                        time: new Date(300000000)
                    }],
                    likes: ['Ernie', 'Fritz']
                }, {
                    title: "post",
                    message: "UNICORNS!",
                    author: "Fritz",
                    time: new Date(200000000),
                    comments: [],
                    likes: ['Ernie']
                }, {
                    title: "post",
                    message: "Ghi Ghi Ghi!",
                    author: "Ernie",
                    time: new Date(400000000),
                    comments: [{
                        message: "Hehehe",
                        author: "Bert",
                        time: new Date(500000000)
                    }, {
                        message: "Hahaha",
                        author: "Sander",
                        time: new Date(600000000)
                    }],
                    likes: []
                }]
        }
    }

    onLogin(naam) {
        this.state.ingelogdeUser= naam;

        this.setState({
            ingelogdeUser: this.state.ingelogdeUser,
        });

        browserHistory.push('/');
    }

    newPost(post) {
        this.state.posts.push(post);
        browserHistory.push('/');
    }

    like(naam, post) {
        this.state.posts[post].likes.push(naam);

        this.setState({
            posts : this.state.posts
        });
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Feed} data={this.state} like={this.like.bind(this)}/>
                    <Route path="/login" component={Login} onLogin={this.onLogin.bind(this)}/>
                    <Route path="/users/:userName" component={Users} />
                    <Route path="/new" component={New} data={this.state} newPost={this.newPost.bind(this)}/>
                </Route>
            </Router>
        );
    }
}

// var data = new Index();

ReactDOM.render((
    <Index/>
), document.getElementById('root'))

