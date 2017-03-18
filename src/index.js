import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import App from './App';
import Login from './Login'
import Users from './Users'
import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/login" component={Login} />
            <Route path="/users/:userName" component={Users} />
        </Route>
    </Router>
), document.getElementById('root'))
