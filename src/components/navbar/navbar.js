import React, { Component } from 'react';

import './navbar.css'

class NavBar extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-light" id="navbar">
                    <a class="navbar-brand" id="navbar-brand-id"href="#">Weather News</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;
