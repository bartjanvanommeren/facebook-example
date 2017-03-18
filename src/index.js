import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App';
import Login from './Login'
import Users from './Users'
import Feed from './Feed'
import './index.css';

    let data = {
        ingelogdeUser: [undefined],
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
    };

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Feed} data={data} />
            <Route path="/login" component={Login}/>
            <Route path="/users/:userName" component={Users} />
        </Route>
    </Router>
), document.getElementById('root'))
