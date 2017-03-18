import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App';
import Login from './Login'
import Users from './Users'
import Feed from './Feed'
import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Feed} />
            <Route path="/login" component={Login} />
            <Route path="/users/:userName" component={Users} />
        </Route>
    </Router>
), document.getElementById('root'))
