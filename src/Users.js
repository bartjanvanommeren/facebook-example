import React, { Component } from 'react';

class Users extends Component {
    render() {
        return (
            <div>
                <p>
                    Dit is de pagina van user: {this.props.params.userName}
                </p>
            </div>
        );
    }
}

export default Users;
