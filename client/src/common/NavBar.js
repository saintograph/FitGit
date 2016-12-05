import React from 'react';
import AppBar from 'material-ui/AppBar';

const NavBar = () => {
    return (
        <AppBar
            title="FIT GIT"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{backgroundColor: '#FBD5DE', textAlign: 'center', fontWeight: 700}}
        />
    );
};

export default NavBar;
