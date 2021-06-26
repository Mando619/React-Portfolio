// import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import userData from '../data';

const Nav = () => {

    // work on toggle menu =using useffect and usestate.
    // const toggle = () => {
    //     state = {
    //         toggleOn: false
    //     };

    // }

    return (
        <div>
            <nav className="navbar_container">
                <img className="small_image" src={userData.avatarImage} alt="myAvatar"></img>
                <Link to="/"> <h2>Armando Estrada</h2></Link>
                {/* <ul className="navbar-right">
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul> */}

            </nav>
        </div>
    )
};

export default Nav;