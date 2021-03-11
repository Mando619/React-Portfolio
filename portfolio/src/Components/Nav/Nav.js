import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to="/"> <h3>logo</h3></Link>
                <ul className="nav-links">
                    <Link to="/portfolio"><li>Portfolio</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;