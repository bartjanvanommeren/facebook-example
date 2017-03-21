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
                    <h2>Logged in as {this.props.route.data.ingelogdeUser}</h2>
                </div>
                <p className="App-intro">
                    <Link to="/New">New Post</Link>
                </p>
                <p>
                    <Link to="/Login">Login</Link>
                </p>
                <p>
                    <Link to="/users/Christiaan">Userpagina van Christiaan</Link>
                </p>
                {this.props.route.data.posts.map((post, index) =>
                    <div key = {index}>
                        <hr/>
                        <Post post={post} user={this.props.route.data.ingelogdeUser} like={this.props.route.like} id={index}/>
                    </div>
                )}
            </div>
        );
    }
}


class Post extends Component{
    like(event){
        event.preventDefault();
        if(this.props.post.likes.includes(this.props.user)){
            console.log("Heeft al geliked!")
        }
        else{
            this.props.like(this.props.user, this.props.id);
        }
    }

    render(){
        return(
            <div id="post">
                <p className="App-intro">
                    Author = {this.props.post.author}
                </p>
                <p className="App-intro">
                    Title = {this.props.post.title}
                </p>
                <p className="App-intro">
                    Message = {this.props.post.message}
                </p>
                <form className="App-login" onSubmit={this.like.bind(this)}>
                    <button type="submit">Like</button>
                </form>
                <p className="App-intro">
                    Likes = {this.props.post.likes.length}
                </p>
                    {this.props.post.comments.map((comment, index) =>
                        <div key = {index}>
                            <hr/>
                            <Comment comment={comment} />
                        </div>
                    )}
            </div>
        )
    }
}

class Comment extends Component{
    render(){
        return(
            <div id="comment">
                <p>
                    {this.props.comment.author} = {this.props.comment.message}
                </p>
            </div>
        )
    }
}

export default Feed;
