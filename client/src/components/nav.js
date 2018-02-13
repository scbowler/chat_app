import React from 'react';
import { Link } from 'react-router-dom';

export default props => {

    const navStyles = {
        paddingLeft: '10px'
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <Link style={navStyles} to="/" className="brand-logo">Chat App</Link>
                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};