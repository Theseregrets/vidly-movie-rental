import React, { Component } from 'react'


class Like extends Component {

    render() {
        let classes = 'fa';
        if (!this.props.liked) classes += "r fa-heart";
        else classes += "s fa-heart"
        return (<i className={classes} onClick={this.props.onClick}
            style={{ cursor: 'pointer' }}></i>);
    }
}

export default Like;