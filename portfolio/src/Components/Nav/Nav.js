import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar_container">
                <Link to="/"> <h2 className="nav_name">Armando Estrada</h2></Link>
                <ul className="navbar-right">
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;