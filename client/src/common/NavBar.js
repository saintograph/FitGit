import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class NavBar extends Component {

    handleToggle (event) {
        event.preventDefault();
        this.props.handleToggle();
    }

    render() {
        return (
            <AppBar
                title="FIT GIT"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                style={{backgroundColor: '#FBD5DE', textAlign: 'center', fontWeight: 700}}
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
            />
        );
    }
}

export default NavBar;
