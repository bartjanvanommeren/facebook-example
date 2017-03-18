import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        }
    }

    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}

export default App;
